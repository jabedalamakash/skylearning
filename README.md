Will be in the user model - ( id, first_name, last_name, age, grade, courses )
Whose API you have to make -
 => Creating API for single student registration.
 => Create API for registering many students at once.
 => Creating API to delete a single student.
 => API needs to be created to update student information.
 => An API needs to be created to show the data of a single student.
 => API should be created to get all students together.

 Created Students Database using Prisma
# Register  many students at once.
- http://localhost:3000/api/students/registermany

 # Single student registration.
 - http://localhost:3000/api/students/register

 # Show the data of a single student.
  - http://localhost:3000/api/students/getone?id=2

# Get all students data together.
- http://localhost:3000/api/students/getAll

# Update student information.
 - http://localhost:3000/api/students/update?id=2

 # Delete a single student.
 - http://localhost:3000/api/students/delete?id=3







