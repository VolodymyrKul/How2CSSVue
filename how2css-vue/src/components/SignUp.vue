<template>
    <form class="w-50 mx-auto mt-5">
            <div class="form-group">
                <div>
                    <input type="text" class="form-control" placeholder="Enter name" id="name" name="username"/>
                </div>
            </div>
            <div class="form-group">
                <div>
                    <input type="text" class="form-control" placeholder="Enter surname" id="surname" name="usersurname"/>
                </div>
            </div>
            <div class="form-group">
                <div>
                    <input type="tel" class="form-control" placeholder="Enter phone" id="phone" name="userphone"/>
                </div>
            </div>
            <div class="form-group">
                <div>
                    <input type="email" class="form-control" placeholder="Enter email" id="email" name="useremail"/>
                </div>
            </div>
            <div class="form-group">
                <div>
                    <input type="password" class="form-control" placeholder="Enter password" id="pwd" name="userpass"/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
            <div class="alert alert-danger mt-4" role="alert">
                User did not register!
            </div>
            <div class="alert alert-success mt-4" role="alert">
                User registered success!
            </div>
    </form>
</template>