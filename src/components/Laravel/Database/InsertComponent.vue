<template class="mb-5">
  <h3>Insert/Create</h3>
  <p class="fw-bolder">
    Laravel provides a simple, expressive database abstraction layer that makes
    it easy to query the database and interact with it in a more Object Oriented
    way.To insert data in Laravel, we can use Model or DB instance for its
    instance. We can access the database in both the ways. We call the model
    method Eloquent ORM. Whereas we access the DB instance with the help of
    packages.
  </p>
  <p class="fw-bolder">Insert/Create a new record in the database</p>

  <h5>Eloquent ORM :</h5>
  <p>
    using the model method Eloquent ORM, we can insert and update data in the database.To create a new record in the database from a model, simply create a new model instance and call the save method.<br/><br/>
    <pre>
        Syntax:                              Example:

        $modelObject = new ModelName;        $user = new User;
 
        $modelObject->name = 'Value';        $user->name = $request->name;
        
        $modelObject->save();                $user->save();
    </pre>
  </p>

  <p>
    Using The Model Create Method<br/>
    <pre class="mt-2 text-start">
      // Create a new user in the database...
      Model::create(array('key' => 'value'));
      $user = User::create(['name' => 'John']);
      
      // Retrieve the user by the attributes, or create it if it doesn't exist...
      Model::firstOrCreate(array('key' => 'value'));
      $user = User::firstOrCreate(['name' => 'John']);
      
      // Retrieve the user by the attributes, or instantiate a new instance...
      Model::firstOrNew(array('key' => 'value'));
      $user = User::firstOrNew(['name' => 'John']);

      //We can also insert data into the database by using insert method, but by using this method, both these columns createdat and updatedat are not automatically filled. For this then we have to use the carbon package.
      $user = User::insert(['name' => 'John', 'created_at' => carbon::now()]);

      // Create or update a record matching attibutes, and fill with values
      Model::updateOrCreate(array('search_key' => 'search_value'), array('key' => 'value'));
      $user = User::updateOrCreate(['firstname' => 'John'], ['lastname' => 'deou']);
    </pre>
  </p>
</template>
<script>
export default {
  name: "InsertComponent",
};
</script>