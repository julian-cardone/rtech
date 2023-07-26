@schools.each do |school|
    json.set! school.id do
        json.partial! 'api/schools/school', school: school
    end
end
