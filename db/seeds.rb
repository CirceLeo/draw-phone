# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts ("seeds?")
Drawing.create!(
    data_url: "data:image/jpeg;base64,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",
    origin_pic_url: "data:image/jpeg;base64,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")
puts ("seeds.")