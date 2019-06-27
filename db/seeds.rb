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
Booking.delete_all
Review.delete_all

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
    title: "Air Ashari",
    description: "The Ashari are a multiracial people divided into four tribes: Air, Earth, Water, and Fire. Each of the four tribes live in locations where the Elemental Planes have bled into the Material Plane. The Ashari make it their duty to guard these portals, ensuring that nothing dangerous is able to pass between the planes.-$-The Ashari are, for the most part, insular, living in remote areas and not interacting much with the outside world or even each other. Their tribes are made up of a diversity of races.-$-In their role as guardians of the Elemental Planes portals, the Ashari have developed deep connections to their respective elements that influence each Ashari's culture. Their leaders are usually skilled in druidic or other nature magics, but their societies include a variety of professions and classes aside from druids.",
    rate: 50,
    city: "New York, New York",
    address: "103 Headquarters Road",
    location_type: "Wilderness",
    latitude: 40.742779,
    longitude: -73.989888,
    num_bath: 0,
    expansion: "false",
    edition_num: 5,
    max_players: 6
    )
    
ashari1 = open('https://airdnd-prod.s3.amazonaws.com/ashari/forest-village.jpg')
ashari2 = open('https://airdnd-prod.s3.amazonaws.com/ashari/forest-village-inside.jpg')
ashari3 = open('https://airdnd-prod.s3.amazonaws.com/ashari/forest-village-bed.jpg')
ashari4 = open('https://airdnd-prod.s3.amazonaws.com/ashari/forest-entrance.jpg')
ashari5 = open('https://airdnd-prod.s3.amazonaws.com/ashari/forest-temple.jpg')

listing1.photos.attach(io: ashari1, filename: "tree-house.jpg")
listing1.photos.attach(io: ashari2, filename: "tree-house-inside.jpg")
listing1.photos.attach(io: ashari3, filename: "tree-house-bed.jpg")
listing1.photos.attach(io: ashari4, filename: "tree-house-entrance.jpg")
listing1.photos.attach(io: ashari5, filename: "tree-house-temple.jpg")

listing2 = Listing.create(
    host_id: user8[:id],
    title: "Greyskull Keep",
    description: "Greyskull Keep was the home of Vox Machina. It is located in Tal'Dorei, just outside the slums of Emon on the southern side.-$-After first saving the city of Emon, Sovereign Uriel Tal'Dorei III and the Council of Tal'Dorei rewarded them with the construction of Greyskull. It took six months to build.  Following Vox Machina's adventures in Whitestone, Sovereign Uriel agreed to make Greyskull Keep the Whitestone Embassy in Emon.-$-Greyskull Keep is located on top of a grassy hill surrounded by a river outside of the wall of the Abdar's Promenade district. A massive gate blocks the entrance to the courtyard of the keep, usually guarded by at least one person at all times. An iron bell is situated at the top of the keep to alert everyone inside of new arrivals.",
    rate: 600,
    city: "New York, New York",
    address: "1 Heart Island",
    location_type: "Fortification",
    latitude: 40.729711,
    longitude: -73.978004,
    num_bath: 1,
    expansion: "false",
    edition_num: 5,
    max_players: 8,
    )
        
greyskull1 = open("https://airdnd-prod.s3.amazonaws.com/Greyskull_keep/greyskull_keep.jpg")
greyskull2 = open("https://airdnd-prod.s3.amazonaws.com/Greyskull_keep/greyskull_keep01.jpg")
greyskull3 = open("https://airdnd-prod.s3.amazonaws.com/Greyskull_keep/greyskull_keep02.jpg")
greyskull4 = open("https://airdnd-prod.s3.amazonaws.com/Greyskull_keep/greyskull_keep03.jpg")
greyskull5 = open("https://airdnd-prod.s3.amazonaws.com/Greyskull_keep/greyskull_keep04.jpg")

listing2.photos.attach(io: greyskull1, filename: "greyskull-01.jpg")
listing2.photos.attach(io: greyskull2, filename: "greyskull-02.jpg")
listing2.photos.attach(io: greyskull3, filename: "greyskull-03.jpg")
listing2.photos.attach(io: greyskull4, filename: "greyskull-04.jpg")
listing2.photos.attach(io: greyskull5, filename: "greyskull-05.jpg")
    
listing3 = Listing.create(
    host_id: user2[:id],
    title: "The Leaky Tap",
    description: "The Leaky Tap is a moderately-sized tavern in Zadash. It is owned by Claudia Sheed, a friend of Bryce Feelid.[1] Helping run the tavern is a plump white dragonborn barkeep named Wessek the Trim.-$-At some time someone died in the wine cellar.-$-Most of the patrons that frequented this tavern wore somewhat dusty destitute clothing that looks to be torn and ragged at the edges. Some the patrons could well have been farm hands based on their appearance.",
    rate: 25,
    city: "New York, New York",
    address: "45 Zadash Gate",
    location_type: "City",
    latitude: 40.714118,
    longitude: -73.997388,
    num_bath: 2,
    expansion: "false",
    edition_num: 5,
    max_players: 6
    )
        
leaky1 = open("https://airdnd-prod.s3.amazonaws.com/leaky+tap/leaky_tap01.jpg")
leaky2 = open("https://airdnd-prod.s3.amazonaws.com/leaky+tap/leaky_tap02.jpg")
leaky3 = open("https://airdnd-prod.s3.amazonaws.com/leaky+tap/leaky_tap03.jpg")
leaky4 = open("https://airdnd-prod.s3.amazonaws.com/leaky+tap/leaky_tap04.jpg")
leaky5 = open("https://airdnd-prod.s3.amazonaws.com/leaky+tap/leaky_tap05.jpg")

listing3.photos.attach(io: leaky1, filename: "leaky-01.jpg")
listing3.photos.attach(io: leaky2, filename: "leaky-02.jpg")
listing3.photos.attach(io: leaky3, filename: "leaky-03.jpg")
listing3.photos.attach(io: leaky4, filename: "leaky-04.jpg")
listing3.photos.attach(io: leaky5, filename: "leaky-05.jpg")
            
listing4 = Listing.create(
    host_id: user3[:id],
    title: "Ivory Tower",
    description: "The Ivory Tower was the home of Lady Allura. The tower was destroyed by Vorugal when the Chroma Conclave attacked Emon in Omens. It was located in the Cloudtop District of Emon.-$-The tower itself was several stories in height and made up of a white stone (probably marble).  A magical stone platform with runes carved into its sides acted as an elevator between these separate floors. Bookshelves lined the platform's shaft in between the floors, which were filled with various books, notes, and scrolls on all manner of subjects. There were also stairways that led outside of the tower's physical structure into rooms that should not exist, which was only possible due to the building's arcane nature.",
    rate: 5,
    city: "New York, New York",
    address: "E rd",
    location_type: "Fortification",
    latitude: 40.751693,
    longitude: -73.959634,
    num_bath: 0,
    expansion: "false",
    edition_num: 5,
    max_players: 7
    )   

tower1 = open("https://airdnd-prod.s3.amazonaws.com/tower/tower01.jpg")
tower2 = open("https://airdnd-prod.s3.amazonaws.com/tower/tower02.jpg")
tower3 = open("https://airdnd-prod.s3.amazonaws.com/tower/tower03.jpg")
tower4 = open("https://airdnd-prod.s3.amazonaws.com/tower/tower04.jpg")
tower5 = open("https://airdnd-prod.s3.amazonaws.com/tower/tower05.jpg")

listing4.photos.attach(io: tower1, filename: "tower-01.jpg")
listing4.photos.attach(io: tower2, filename: "tower-02.jpg")
listing4.photos.attach(io: tower3, filename: "tower-03.jpg")
listing4.photos.attach(io: tower4, filename: "tower-04.jpg")
listing4.photos.attach(io: tower5, filename: "tower-05.jpg")

listing5 = Listing.create(
    host_id: user2[:id],
    title: "Greyspine Quarry",
    description: "Greyspine-quarryGreyspine Quarry, also known as the Keenstone Quarry, is the dwarven mithral mine located in Kraghammer.-$-Greyspine Quarry was owned by House Greyspine. The mine itself is made up of three deep holes that stretch far into the side of the mountain going down. As the mine is dug out, Kraghammer slowly begins to build up in areas that are no longer in use, thus allowing the city to expand downwards. Many mining buildings stretch around the center of the quarry. There are also a series of tunnels that go off to the sides of these main tunnels, often times dwarves will come across a goblin den that needs to be cleared out.",
    rate: 15,
    city: "New York, New York",
    address: "109 W 38th St",
    location_type: "The Underdark",
    latitude: 40.752626,
    longitude: -73.986318,
    num_bath: 2,
    expansion: "false",
    edition_num: 5,
    max_players: 6
    )

mine1 = open("https://airdnd-prod.s3.amazonaws.com/mines/cave01.jpg")
mine2 = open("https://airdnd-prod.s3.amazonaws.com/mines/cave02.jpg")
mine3 = open("https://airdnd-prod.s3.amazonaws.com/mines/cave03.jpg")
mine4 = open("https://airdnd-prod.s3.amazonaws.com/mines/cave04.jpg")
mine5 = open("https://airdnd-prod.s3.amazonaws.com/mines/cave05.jpg")

listing5.photos.attach(io: mine1, filename: "cave-01.jpg")
listing5.photos.attach(io: mine2, filename: "cave-02.jpg")
listing5.photos.attach(io: mine3, filename: "cave-03.jpg")
listing5.photos.attach(io: mine4, filename: "cave-04.jpg")
listing5.photos.attach(io: mine5, filename: "cave-05.jpg")

listing6 = Listing.create(
    host_id: user9[:id],
    title: "Gilmore's Glorious Goods",
    description: "The exterior was made up of deep blue and purple fabrics draped over the building, which had been painted with various colors. The entryway had no door, but rather many beads and cloth drapes that were meant to be pushed aside.-$-The interior of the shop was magically enchanted to be bigger on the inside than it was on the outside. In reality, the business was quite a large two-story building. Incense and perfumes permeated the place, like a terrible medieval Sephora. A series of everburning candles in sconces adorned the walls. On the first floor, tables bearing glass cases resided within the center of the room, and there was a long, wooden counter on the far end. Behind that was the entrance to Gilmore's private quarters. On the far left wall was an area where an herbalist worked on various potions. The second story was where adventuring gear could be found, such as belts, armor, weapons, and enchanted rings.",
    rate: 100,
    city: "New York, New York",
    address: "45 W 34th St",
    location_type: "City",
    latitude: 40.749890,
    longitude: -73.986943,
    num_bath: 1,
    expansion: "false",
    edition_num: 5,
    max_players: 4
    )

good1 = open("https://airdnd-prod.s3.amazonaws.com/gilmores/good01.jpg")
good2 = open("https://airdnd-prod.s3.amazonaws.com/gilmores/good02.jpg")
good3 = open("https://airdnd-prod.s3.amazonaws.com/gilmores/good03.jpg")
good4 = open("https://airdnd-prod.s3.amazonaws.com/gilmores/good04.jpg")
good5 = open("https://airdnd-prod.s3.amazonaws.com/gilmores/good05.jpg")

listing6.photos.attach(io: good1, filename: "good-01.jpg")
listing6.photos.attach(io: good2, filename: "good-02.jpg")
listing6.photos.attach(io: good3, filename: "good-03.jpg")
listing6.photos.attach(io: good4, filename: "good-04.jpg")
listing6.photos.attach(io: good5, filename: "good-05.jpg")

listing7 = Listing.create(
    host_id: user7[:id],
    title: "Blooming Grove",
    description: "This is a place where we take the dearly departed people who have done well and people who have lived good lives and we put them into earth that has been touched by The Wildmother. In turn, she grants them with beauty and and splendor and sometimes tea.-$-The Blooming Grove also known as the Bone Orchard to the residents of Shadycreek Run, is a graveyard and temple to The Wildmother in the Savalierwood six miles northwest of Shadycreek Run",
    rate: 250,
    city: "New York, New York",
    address: "75 Broadway",
    location_type: "Religious Location",
    latitude: 40.708184,
    longitude: -74.012164,
    num_bath: 3,
    expansion: "false",
    edition_num: 5,
    max_players: 8
    )

bloom1 = open("https://airdnd-prod.s3.amazonaws.com/bloom/church01.jpg")
bloom2 = open("https://airdnd-prod.s3.amazonaws.com/bloom/church02.jpg")
bloom3 = open("https://airdnd-prod.s3.amazonaws.com/bloom/church03.jpg")
bloom4 = open("https://airdnd-prod.s3.amazonaws.com/bloom/church04.jpg")
bloom5 = open("https://airdnd-prod.s3.amazonaws.com/bloom/church05.jpg")

listing7.photos.attach(io: bloom1, filename: "bloom-01.jpg")
listing7.photos.attach(io: bloom2, filename: "bloom-02.jpg")
listing7.photos.attach(io: bloom3, filename: "bloom-03.jpg")
listing7.photos.attach(io: bloom4, filename: "bloom-04.jpg")
listing7.photos.attach(io: bloom5, filename: "bloom-05.jpg")

listing8 = Listing.create(
    host_id: user5[:id],
    title: "Victor's",
    description: "So! You came looking for black powder, did you? No one asks about the black powder, but I knew it had a purpose!-$-Victor was a vendor of mining products (and byproducts) in Vasselheim, and he served as Percy's source of black powder in Othanzia.",
    rate: 1000,
    city: "New York, New York",
    address: "59 Chelsea Piers",
    location_type: "City",
    latitude: 40.745582,
    longitude: -74.010051,
    num_bath: 1,
    expansion: "false",
    edition_num: 5,
    max_players: 3
    )

forge1 = open("https://airdnd-prod.s3.amazonaws.com/forge/forge01.jpg")
forge2 = open("https://airdnd-prod.s3.amazonaws.com/forge/forge02.jpg")
forge3 = open("https://airdnd-prod.s3.amazonaws.com/forge/forge03.jpg")
forge4 = open("https://airdnd-prod.s3.amazonaws.com/forge/forge04.jpg")
forge5 = open("https://airdnd-prod.s3.amazonaws.com/forge/forge05.jpg")

listing8.photos.attach(io: forge1, filename: "forge-01.jpg")
listing8.photos.attach(io: forge2, filename: "forge-02.jpg")
listing8.photos.attach(io: forge3, filename: "forge-03.jpg")
listing8.photos.attach(io: forge4, filename: "forge-04.jpg")
listing8.photos.attach(io: forge5, filename: "forge-05.jpg")

book1 = Booking.create(
    listing_id: listing5[:id],
    guest_id: user1[:id],
    start_date: Date.new(2019, 9, 10),
    end_date: Date.new(2019, 9, 12),
    players: 4,
)

book2 = Booking.create(
    listing_id: listing5[:id],
    guest_id: user1[:id],
    start_date: Date.new(2019, 8, 3),
    end_date: Date.new(2019, 8, 9),
    players: 4,
)

book3 = Booking.create(
    listing_id: listing3[:id],
    guest_id: user1[:id],
    start_date: Date.new(2018, 9, 3),
    end_date: Date.new(2018, 9, 9),
    players: 3,
    status: "approved",
)

review1 = Review.create(
    listing_id: listing5[:id],
    author_id: user6[:id],
    body: "The DM was great! The story in very interactive. Can't wait to campaign with her again.",
    rating: 4,
)

review2 = Review.create(
    listing_id: listing3[:id],
    author_id: user6[:id],
    body: "The story was a bit weird, felt like we were just constantly at the bar.",
    rating: 2,
)

review3 = Review.create(
    listing_id: listing3[:id],
    author_id: user8[:id],
    body: "He kept killing off all the players. It was a TPK!",
    rating: 1,
)

review4 = Review.create(
    listing_id: listing3[:id],
    author_id: user7[:id],
    body: "Nothing made sense.",
    rating: 2,
)
