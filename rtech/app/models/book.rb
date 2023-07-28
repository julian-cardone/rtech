class Book < ApplicationRecord

    validates :title, presence: true
    validates :price, presence: true
    validates :school_id, presence: true

    #would be for aws s3 integration to fetch the photo for the book
    # has_one_attached :photo

    #associations
    belongs_to :school

end

