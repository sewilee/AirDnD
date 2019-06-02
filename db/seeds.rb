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