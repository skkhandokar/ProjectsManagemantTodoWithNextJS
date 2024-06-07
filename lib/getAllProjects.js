import React from 'react'

export default async function getAllProjects() {
 

  const projects = [
    {
      "id": 1,
      "projectId": 1,
      "title": "Social Media Clone",
      "tasks": ["Build a lite version of a popular social media platform like Twitter or Instagram. This allows you to experiment with user authentication, data storage, feeds, and basic social interactions."],
      "status": "To Do",
      "recentActivity": "Setting up project repository",
      "team": ["John", "Alice"]
    },
    {
      "id": 2,
      "projectId": 2,
      "title": "To-Do List App",
      "tasks": ["Create a user-friendly application for managing tasks, including adding, editing, deleting, and marking them as complete. Consider features like priority levels, due dates, and notifications."],
      "status": "In Progress",
      "recentActivity": "Implementing task deletion functionality",
      "team": ["Bob", "Carol"]
    },
    {
      "id": 3,
      "projectId": 3,
      "title": "Pomodoro Timer App",
      "tasks": ["Implement the Pomodoro Technique for focused work sessions. Develop a timer that alternates between work and break intervals, incorporating visual cues and customizable durations."],
      "status": "Done",
      "recentActivity": "Released version 1.0",
      "team": ["Alice", "Dave"]
    },
    {
      "id": 4,
      "projectId": 4,
      "title": "Weather App with Real-Time Data",
      "tasks": ["Develop a visually appealing application that displays real-time weather information based on user location. Integrate with weather APIs to fetch accurate data and present it in an easy-to-understand format."],
      "status": "To Do",
      "recentActivity": "Setting up project environment",
      "team": ["John", "Eve"]
    },
    {
      "id": 5,
      "projectId": 5,
      "title": "Random Inspirational Quote Generator",
      "tasks": ["Create an app that serves up a random inspirational or funny quote each time it's accessed. You can integrate with relevant APIs or curate your own list of quotes."],
      "status": "In Progress",
      "recentActivity": "Designing UI components",
      "team": ["Carol", "Frank"]
    },
    {
      "id": 6,
      "projectId": 6,
      "title": "Movie Database App with Search",
      "tasks": ["Develop a searchable movie database application that allows users to find movies based on title, genre, and other criteria. Consider integrating with movie APIs or manually adding entries."],
      "status": "Done",
      "recentActivity": "Bug fixes and performance enhancements",
      "team": ["Alice", "George"]
    },
    {
      "id": 7,
      "projectId": 7,
      "title": "Simple E-commerce Shopping Cart",
      "tasks": ["Create a basic shopping cart functionality for an online store. Allow users to add items, view their cart, calculate the total amount, and potentially proceed to checkout (depending on complexity)."],
      "status": "To Do",
      "recentActivity": "Brainstorming session for UI/UX improvements",
      "team": ["Dave", "Helen"]
    },
    {
      "id": 8,
      "projectId": 8,
      "title": "Image Gallery with Zoom and Lightbox Features",
      "tasks": ["Develop an image gallery app that displays a collection of images in a grid or list format. Incorporate zooming and lightbox features for a more engaging user experience."],
      "status": "In Progress",
      "recentActivity": "Implementing zoom functionality",
      "team": ["Frank", "Ivy"]
    },
    {
      "id": 9,
      "projectId": 9,
      "title": "Currency Converter with Real-Time Rates",
      "tasks": ["Create an app that converts currencies based on user input, fetching real-time exchange rates through integration with currency APIs. Ensure an intuitive user interface for entering amounts and displaying results."],
      "status": "Done",
      "recentActivity": "Added support for additional currencies",
      "team": ["George", "Jack"]
    },
    {
      "id": 10,
      "projectId": 10,
      "title": "Password Generator for Secure Passwords",
      "tasks": ["Develop an app that generates secure passwords based on user-defined criteria like length, character types, and special symbols. Prioritize security best practices to avoid storing or transmitting passwords in plain text."],
      "status": "To Do",
      "recentActivity": "Setting up initial project structure",
      "team": ["Helen", "Kevin"]
    }
  ];
  
  return projects;
  
  

}
