require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Listing.delete_all

user1 = User.create(
    email: "demouser@demo.com",
    password: "password",
    fname: "Stranger",
    lname: "Danger",
    birthday: Date.new(1992, 6, 6)
)

user2 = User.create(
    email: "grog@critroll.com",
    password: "password",
    fname: "Grog",
    lname: "Strongjaw",
    birthday: Date.new(1969, 8, 3)
)

user3 = User.create(
    email: "burtreynolds@critroll.com",
    password: "password",
    fname: "Scanlan",
    lname: "Shorthalt",
    birthday: Date.new(1949, 10, 9)
)

user4 = User.create(
    email: "keyleth@critroll.com",
    password: "password",
    fname: "Keyleth",
    lname: "of the Air Ashari",
    birthday: Date.new(1996, 5, 10)
)

user5 = User.create(
    email: "percy@critroll.com",
    password: "password",
    fname: "Percival Fredrickstein",
    lname: "von Musel Klossowski de Rolo",
    birthday: Date.new(1994, 1, 19)
)

user6 = User.create(
    email: "pike@critroll.com",
    password: "password",
    fname: "Pike",
    lname: "Trickfoot",
    birthday: Date.new(1983, 8, 9)
)

user7 = User.create(
    email: "vax@critroll.com",
    password: "password",
    fname: "Vax'ildan",
    lname: "Vessar",
    birthday: Date.new(1991, 5, 28)
)

user8 = User.create(
    email: "vex@critroll.com",
    password: "password",
    fname: "Vex'ahlia",
    lname: "de Rolo",
    birthday: Date.new(1991, 5, 28)
)

user9 = User.create(
    email: "gilmore@critroll.com",
    password: "password",
    fname: "Shaun",
    lname: "Gilmore",
    birthday: Date.new(1982, 6, 29)
)




listing1 = Listing.create(
    host_id: user4[:id],
    title: "The Air Ashari, but not really",
    rate: 50,
    city: "Moose, Wyoming",
    address: "103 Headquarters Road",
    location_type: "Wilderness",
    latitude: 44.131347,
    longitude: -110.998935,
    num_bath: 0,
    expansion: "false",
    edition_num: 5,
    max_players: 6
    )
    
ashari1 = open('https://airdnd-prod.s3.amazonaws.com/Air+Ashari/forest-village.jpg')
ashari2 = open('https://airdnd-prod.s3.amazonaws.com/Air+Ashari/forest-village-inside.jpg')
ashari3 = open('https://airdnd-prod.s3.amazonaws.com/Air+Ashari/forest-village-bed.jpg')

listing1.photos.attach(io: ashari1, filename: "tree-house.jpg")
listing1.photos.attach(io: ashari2, filename: "tree-house-inside.jpg")
listing1.photos.attach(io: ashari3, filename: "tree-house-bed.jpg")

listing2 = Listing.create(
    host_id: user8[:id],
    title: "Greyskull Keep",
    rate: 600,
    city: "Alexandria Bay, New York",
    address: "1 Heart Island",
    location_type: "Fortification",
    latitude: 44.344372,
    longitude: -75.922657,
    num_bath: 1,
    expansion: "false",
    edition_num: 5,
    max_players: 8
    )
        
greyskull1 = open("https://airdnd-prod.s3.amazonaws.com/Greyskull_keep/greyskull_keep.jpg")
greyskull2 = open("https://airdnd-prod.s3.amazonaws.com/Greyskull_keep/greyskull_keep01.jpg")
greyskull3 = open("https://airdnd-prod.s3.amazonaws.com/Greyskull_keep/greyskull_keep02.jpg")

listing2.photos.attach(io: greyskull1, filename: "greyskull-01.jpg")
listing2.photos.attach(io: greyskull2, filename: "greyskull-02.jpg")
listing2.photos.attach(io: greyskull3, filename: "greyskull-03.jpg")
    
listing3 = Listing.create(
    host_id: user2[:id],
    title: "The Leaky Tap",
    rate: 25,
    city: "New York, New York",
    address: "45 Zadash Gate",
    location_type: "City",
    latitude: 44.32372,
    longitude: -75.92967,
    num_bath: 2,
    expansion: "false",
    edition_num: 5,
    max_players: 6
    )
        
leaky1 = open("https://airdnd-prod.s3.amazonaws.com/leaky_tap/leaky_tap01.jpg")
leaky2 = open("https://airdnd-prod.s3.amazonaws.com/leaky_tap/leaky_tap02.jpg")
leaky3 = open("https://airdnd-prod.s3.amazonaws.com/leaky_tap/leaky_tap03.jpg")

listing3.photos.attach(io: leaky1, filename: "leaky-01.jpg")
listing3.photos.attach(io: leaky2, filename: "leaky-02.jpg")
listing3.photos.attach(io: leaky3, filename: "leaky-03.jpg")
            
            