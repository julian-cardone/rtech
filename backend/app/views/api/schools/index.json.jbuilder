json.array! @schools do |school|
    json.partial! 'api/schools/school', school: school
end
