class Api::AlbumsController < ApplicationController

    # for AWS s3 bucket integration to attach photos to books
    # wrap_parameters include :Book.attribute_name + [:photo], format: :multipart_form

    def index
        @books = Books.all
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