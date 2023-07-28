# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'

puts "Destroying tables..."

School.destroy_all
Book.destroy_all

puts "resetting primary keys..."
    #so that after seeding, the first `User` has `id` of 1
%w(schools books).each do |table_name|
    ApplicationRecord.connection.reset_pk_sequence!(table_name)
end

puts "creating schools..."

50.times do
    School.create(name: Faker::University.name)
end

puts 'creating books...'

500.times do
    school = School.order('RANDOM()').first # Get a random school from the database
    Book.create(
      title: Faker::Book.title,
      price: Faker::Commerce.price(range: 10..100.0),
      school_id: school.id
    )
end

puts "seeding complete!"


