json.set! "books" do
    @books.each_with_index do |book, i|
        json.set! i+1 do
            json.extract! book, :id, :title, :price, :school_id, :school.name
        end
    end
end
