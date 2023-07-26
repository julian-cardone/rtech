class School < ApplicationRecord

    validates :name, presence: true

    #would be for aws s3 integration to fetch the photo for the book
    # has_one_attached :photo

    #associations
    has_many :books, dependent: :destroy

end

