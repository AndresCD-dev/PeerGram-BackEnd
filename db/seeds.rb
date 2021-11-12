# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'


user1 = User.create(username: 'Andre101', password: 'admin', password_confirmation: 'admin', avatar: Faker::Avatar.image(slug: "my-own-slug", size: "50x50"))
user2 = User.create(username: 'Dude12', password: '1234', password_confirmation: '1234', avatar: Faker::Avatar.image(slug: "my-own-slug", size: "50x50"))
profile1 = Profile.create(name: "Daniel", bio: "Just a dude with a plan!", user: user2, followers: 10, following: 200)
profile1 = Profile.create(name: "Andres", bio: "Just a dude with a plan!", user: user1, followers: 1000, following: 200)
posts = Post.create([
    {
        caption: Faker::Food.description,
        image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        likes: 3,
        user: user1
    },
    {
        caption: Faker::Food.description,
        image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        likes: 3,
        user: user1
    },
    {
        caption: Faker::Food.description,
        image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        likes: 3,
        user: user1
    },
    {
        caption: Faker::Food.description,
        image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        likes: 3,
        user: user1
    },
    {
        caption: Faker::Food.description,
        image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        likes: 3,
        user: user1
    }
])

comments = Comment.create([
    {
        content: Faker::Food.description,
        likes: 3,
        post: Post.second,
        user: user1
    },
    {
        content: Faker::Food.description,
        likes: 3,
        post: Post.first,
        user: user1
    },
    {
        content: Faker::Food.description,
        likes: 3,
        post: Post.second,
        user: user2
    },
    {
        content: Faker::Food.description,
        likes: 3,
        post: Post.first,
        user: user2
    },
])