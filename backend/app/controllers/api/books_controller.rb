class Api::BooksController < ApplicationController

    # for AWS s3 bucket integration to attach photos to books
    # wrap_parameters include :Book.attribute_name + [:photo], format: :multipart_form

    BOOKS_PER_PAGE = 50

    def index
        page = params.fetch(:page, 0).to_i

        offset = (page * BOOKS_PER_PAGE)

        #eager loading: prevents the n+1 query problem
        @books = Book.includes(:school).offset(offset).limit(BOOKS_PER_PAGE)
        
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