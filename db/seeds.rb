# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
leters = ["a", "b", "c", "d", "e", "f", "g"]
3.times do |i|
  User.create(name: "User #{i}", username: "user00#{i}", email: "user#{leters[i]}@gmail.com", birthdate: Date.parse("Jan 1 1991"), password_digest: BCrypt::Password.create(';alks;dlfkjsd'))
end

2.times do |i|
    Tweete.create(
        text: "This is a test, trying to deploy by the #{i + 1} time",
        user_id: 1
    )
end

2.times do |i|
    Tweete.create(
        text: "This should look good by the #{i + 1} time",
        user_id: 2
    )
end

2.times do |i|
    Tweete.create(
        text: "What about by the #{i + 1} time",
        user_id: 3
    )
end