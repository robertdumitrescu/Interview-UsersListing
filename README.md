# Interview-UsersListing

## Overview

I received this assignment from a company I worked with. It was a lead software corporation with headquarters in Sillicon Valley, California, USA. I worked from home as an outsourced developer and I had a presentation meeting with them every week to show my progress and to review what was developed in the last sprint.  

I applied for the following position:

> Senior Front-end developer with Node.js background

## Demo
I deployed the demo behind two reverse proxies with a load balancer. If you have any trouble viewing the demo, please contact me on **robertdum01@gmail.com**.
> The fully functional demo can be found here: [Demo-Interview-UsersListing](http://demouserslisting.rdumitrescu.com/admin/users)

## Task

So the task sounds like this:

You must develop an listing interface that can manage company users that are registered on any of their platforms. Let's assume that all registered users are centralized in a single database for a better consistency. 

To achieve this, every user will be an object with distinct properties in a larger collection.

An user object will have the following: 

- user_username
- user_name
- user_email
- user_password
- user_gender
- user_profile_image
- user_position
- user_description
- user_curiculum
- generated
- user_is_staff
- user_role
- user_creation_time
- user_modified_time
- _id

A sample object with that structure will be:

```
  {
    "user_username": "RawPreview.com",
    "user_name": "Jona D. Hackett",
    "user_email": "JulianMChampion@teleworm.us",
    "user_password": null,
    "user_gender": "M",
    "user_profile_image": "http://www.adweek.com/agencyspy/wp-content/uploads/sites/7/2015/06/steve-jobs.jpg",
    "user_position": "",
    "user_description": "",
    "user_curiculum": "",
    "generated": "generated",
    "user_is_staff": "",
    "user_role": "5",
    "user_creation_time": 1454366238862,
    "user_modified_time": 1454366238862,
    "_id": "56afde1e6ce5be5718e676c7"
  }
```

To achieve the complete state of the task you will need to use the following technologies:

- Node.js
- Angular.js
- Angular-material ([Official page](http://rdumitrescu.com/resume))


- show all orders
- show all orders from a particular company
- show all orders from a particular address
- show all orders that match the both criterias (reunion for data)
- delete a particular order
- the possibility (a button) to show how often each item has been ordered

You need to consider the following:

- the project must be designed in a scalable manner
- the design doesn't matter so any fancy design doesn't count
- you must design the classes in EcmaScript 6
- the code must be easy to read


## Result

I builded the app with two controllers. One of them was for API calls for an easy-to-use structure for the Angular framework.
The other controller served the static HTML files in order to show the pages that are requested by the user.
In this open-source demo, I disabled the delete button to avoid persistence issues.

The data processing is made in the **ordersModel.js** under **models** folder.

Also I've written the basic JsDoc keywords tags in order to make the code easy to read.

Anyone is free to fork and develop based on this solution. It's nice to have a link back if it's possible.



##Contact

- My resume: [Robert Dumitrescu resume](http://rdumitrescu.com/resume)
- My portfolio: [Robert Dumitrescu portfolio](http://rdumitrescu.com/portfolio/)
- LinkedIn profile: [Robert Dumitrescu LinkedIn profile](https://ro.linkedin.com/in/robertdumitrescu)
- CodePen profile: [Robert Dumitrescu CodePen profile](http://codepen.io/robertdumitrescu/)
