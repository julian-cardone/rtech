class Api::SchoolsController < ApplicationController

    def index 
        @schools = School.all
    end

end