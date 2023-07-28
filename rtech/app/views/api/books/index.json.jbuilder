json.data do 
    json.array! @books do |book|
        json.partial! 'api/books/book', book: book
    end
end

json.nextPage @next_page
