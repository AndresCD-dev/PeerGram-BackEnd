class CommentsController < ApplicationController
    def index
        @comments = Comment.all

        render json: @comments
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        if @comment
            render json: @comment
        else
            render json: {error: "Comment not found"}, status: 404
        end
    end


    def create 
        @comment = Comment.new(comment_params)
        @comment.user_id = session[:user_id]  
        if @comment.save
            render json: @comment, status: 201
        else
            render json: {error: "Product not created"}, status: 400
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment
            @comment.destroy
            render json: {message: "Product deleted"}, status: 200
        else
            render json: {error: "Product not found"}, status: 404
        end
    end


    private

    def comment_params
        params.permit(:content, :post_id)
    end

end
