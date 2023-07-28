class Api::BooksController < ApplicationController

    # for AWS s3 bucket integration to attach photos to books
    # wrap_parameters include :Book.attribute_name + [:photo], format: :multipart_form

    BOOKS_PER_PAGE = 50

    def index
        # fetch the page property from the search query parameters, convert to integer
        page = params.fetch(:page, 0).to_i

        # calculate offset based on the page property and the amount of books per page
        offset = (page * BOOKS_PER_PAGE)

        # eager loading: prevents the n+1 query problem
        # fetch from books table, and include their corresponding school data from schools table
        @books = Book.includes(:school).offset(offset).limit(BOOKS_PER_PAGE)
        
        #nil converts to null in the frontend
        @next_page = @books.size == BOOKS_PER_PAGE ? page + 1 : nil
    end

    def show
        @books = Book.where(school_id: params[:id])
    end

    private
    def book_params
        params.require(:book).permit(
            :school_id
        )
    end

end