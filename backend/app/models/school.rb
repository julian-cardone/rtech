class School < ApplicationRecord

    validates :name, presence: true

    #associations
    has_many :books, dependent: :destroy

end

