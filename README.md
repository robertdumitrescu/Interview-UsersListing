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

- Node.js ([Official page](https://nodejs.org/en/))
- Jade templating engine ([Official page](http://jade-lang.com/))
- Angular.js ([Official page](https://angularjs.org/))
- Angular-material ([Official page](https://material.angularjs.org/latest/))

The interface must have the following functionalities:

- show all users
- filter results on front-end
- have pagination to show multiple pages with results
- have the possibility to define how many results you want to show on a page
- have the possibility to view a record details in a pop-up
- have the possibility to delete a particular record

You need to consider the following:

- the project must load in under 2 seconds for a real-time feel
- any tweaks or improvements are accepted
- you must use at least one jade block inheritance
- if you avoid to use use Jquery it will be a plus

The interface must match the following images: 


## How will be the interface graded:

You will receive a grade from 1 to 10 for interface implementation and how accurate was implemented in comparision with the images.
You will receive another grade for user-experience and usability.


## Result

I builded the interface with the technologies they mentioned with the main focus on performance and usability. I designed the Angular.js controllers structure to match the best-practices that Google recommends to developers. Also I tried to use as much API's calls as I could for a better app scalability.

I also used some usability tweaks like tooltips and toasts for a better interface understanding and an more linear learning curve for new users.

In this open-source demo, I disabled the delete button to avoid persistence issues.

The raw data that they provided me is located under the **data** folder.

I got hired and I worked with them based on a project. Also I received the following grades:

> Interface implementation: **9**
> User-experience(usability): **10**

Also I've written the basic JsDoc keywords tags in order to make the code easy to read.

Anyone is free to fork and develop based on this solution. It's nice to have a link back if it's possible.


##Contact

- My resume: [Robert Dumitrescu resume](http://rdumitrescu.com/resume)
- My portfolio: [Robert Dumitrescu portfolio](http://rdumitrescu.com/portfolio/)
- LinkedIn profile: [Robert Dumitrescu LinkedIn profile](https://ro.linkedin.com/in/robertdumitrescu)
- CodePen profile: [Robert Dumitrescu CodePen profile](http://codepen.io/robertdumitrescu/)
