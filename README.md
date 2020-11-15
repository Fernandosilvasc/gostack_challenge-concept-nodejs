<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" style="width: 100%;"/>

<h3 align="center">
  Challenge 02: Node.js Concepts
</h3>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=#FE7F2D&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=#FE7F2D&labelColor=000000">
</p>

<p align="center">
  <a href="#rocket-about-the-challenge">About the challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

## :rocket: About the challenge

In this challenge, I created a application to put in practice what I have learned in Node.js!

This will be an application to storage portfolio repositories, that will allow to list, update, and delete repositories, and besides that, the repositories can also receive likes.

### Application Routes

This was requested through that challenge.

- **`POST /repositories`**: The route must receive `title`, `URL`, and `techs` inside of the request body. The URL must be the link to the Github of that repository. When registering a new project, it must be stored inside an object in the following format: `{id:" uuid ", title: 'Node.js Challenge', URL: 'http: //github.com / ...' , techs: ["Node.js", "..."], likes: 0} `; Make sure the ID is a UUID, and always start likes as 0.

- **`GET /repositories`**: The route that lists all repositories;

- **`PUT /repositories/:id`**: The route should only change the `title`, `URL` and `techs` of the repository that has the` id` equal to the `id` present in the route parameters;

- **`DELETE /repositories/:id`**: The route must delete a repository with the `id` present in the route parameters;

- **`POST /repositories/:id/like`**: The route must increase the number of likes from the specific repository chosen through the `id` param present in the route parameters, at each call of this route, the number of likes must be increased by 1;

**Tip**: In the code above, we used `POST` in a route, even though it changes the number of likes in the repository without creating anything directly.

If we semantically divide the responsibilities of our application into entities, the like would be an entity, and the repository would be another entity.

With that been said, we have different business rules for each entity, so, by calling the 'like' route and adding just one like, we can interpret that we are creating a new like, and not updating the likes.

So why not use `PUT` instead of `POST`? Precisely because we are "creating" A new like, and not updating the number of likes to any other value.

It may be difficult to see because it is just a number, but think that each like is saved in a table in the database with the user who added this like. Now it’s clearer that you’re creating a new like, right?

### Tests Specification

To complete this challenge was necessary to follow these rules:

- **`should be able to create a new repository`**: In order for this test to pass, your application must allow a repository to be created, and return a JSON with the created project.

- **`should be able to list the repositories`**: In order for this test to pass, your application must return an array with all the repositories that have been created so far.

- **`should be able to update repository`**: In order for this test to pass, your application must allow only the `url`,` title` and `techs` fields to be changed.

- **`should not be able to update a repository that does not exist`**: In order for this test to pass, you must validate in your update route whether the repository id sent by the URL exists or not. If not, return an error with status `400`.

- **`should not be able to update repository likes manually`**: In order for this test to pass, you must not allow your update route to directly change the likes of that repository, maintaining the same number of likes that the repository already had before the update. That's because the only place that should update this information is the route responsible for increasing the number of likes.

- **`should be able to delete the repository`**: In order for this test to pass, you must allow your delete route to delete a project, and when deleted, it must return an empty response, with status `204`.

- **`should not be able to delete a repository that does not exist`**: In order for this test to pass, you must validate in your delete route whether the repository id sent by the URL exists or not. If not, return an error with status `400`.

- **`should be able to give a like to the repository`**: In order for this test to pass, your application must allow a repository with the given id to receive likes. The value of likes must be increased by 1 for each request, and as the result, return a JSON containing the repository with the number of likes updated.

- **`should not be able to like a repository that does not exist`**: In order for this test to pass, you must validate in your like route whether the repository id sent by the URL exists or not. If not, return an error with status `400`.

## :memo: Licence

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for more information.

---

👨🏻‍💻 - Made by Fernando Corrêa da Silva.
