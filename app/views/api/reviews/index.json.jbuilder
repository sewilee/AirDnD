@reviews.each do |review|
    json.review do
        json.set! review.id do 
            json.extract! review, :id, :author_id, :body, :created_at
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
if @reviews.length > 0
    json.review do
        json.average do 
            json.rating @rating
            json.communication @communication
            json.gameplay @gameplay
            json.story @story
            json.roleplay @roleplay
            json.combat @combat
            json.dm @dm
        end
    end
end