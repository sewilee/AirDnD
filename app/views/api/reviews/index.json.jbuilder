@reviews.each do |review|
    json.review do
        json.set! review.id do 
            json.extract! review, :id, :author_id, :body, :rating, :created_at
        end
    end

    json.author do
        json.set! review.author.id do 
            author = review.author
            json.extract! author, :fname, :lname, :id
            if author.photo.attached?
                json.photoUrl url_for(author.photo)
            end
        end
    end
end

