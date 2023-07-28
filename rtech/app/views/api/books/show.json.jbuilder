json.data do 
    json.array! @books do |book|
        json.extract! book, :id, :title, :price, :school_id, :school.name
    end
end