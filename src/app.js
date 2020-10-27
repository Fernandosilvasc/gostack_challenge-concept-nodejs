const express = require("express");
const cors = require("cors");
const { v4, validate } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  const result = repositories;
  response.json(result);

});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: v4(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(repository);
  
  return response.json(repository)
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);
  
  if(repositoryIndex < 0) {
    return response.status(400).json({error: "Repository not found"});
  }

  const { likes } = repositories[repositoryIndex];
  
  const repository = {
    id,
    title,
    url,
    techs,
    likes
  }

  repositories[repositoryIndex] = repository;

  return response.json(repository)
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoryIndex < 0) {
    return response.status(400).json({error: "Repository not found"});
  }

  repositories.splice(repositoryIndex, 1);

  return response.status(204).json();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoryIndex < 0) {
    return response.status(400).json({error: "Repository not found"});
  }

  const { title, url, techs, likes } = repositories[repositoryIndex]

  const repository = {
    id,
    title,
    url,
    techs,
    likes: likes +1, 
  }

  repositories[repositoryIndex] = repository;
  const result = repositories[repositoryIndex];

  return response.json(result)

});

module.exports = app;
