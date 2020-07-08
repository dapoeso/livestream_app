<!doctype html>
<html lang="en">
<% include header.ejs %>
<body>
<% include navbar.ejs %>

<div class="container app mt-5">
    <h4>Register</h4>

    <hr class="my-4">

    <div class="row">
        <form action="/register"
              method="post"
              class="col-xs-12 col-sm-12 col-md-8 col-lg-6">

            <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" class="form-control" placeholder="Enter username" required>
                <% if (errors.username.length) { %>
                    <small class="form-text text-danger"><%= errors.username %></small>
                <% } %>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" name="email" class="form-control" placeholder="Enter email" required>
                <% if (errors.email.length) { %>
                    <small class="form-text text-danger"><%= errors.email %></small>
                <% } %>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" class="form-control" placeholder="Password" required>
            </div>

            <div class="form-group">
                <div class="leader">
                    Have an account? Login <a href="/login">here</a>.
                </div>
            </div>

            <button type="submit" class="btn btn-dark btn-block">Register</button>
        </form>
    </div>
</div>

<% include footer.ejs %>
</body>
</html>
