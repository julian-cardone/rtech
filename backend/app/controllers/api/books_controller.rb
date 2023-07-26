class Api::BooksController < ApplicationController

    # for AWS s3 bucket integration to attach photos to books
    # wrap_parameters include :Book.attribute_name + [:photo], format: :multipart_form

    def index
        #eager loading: prevents the n+1 query problem
        @books = Book.includes(:school).all
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