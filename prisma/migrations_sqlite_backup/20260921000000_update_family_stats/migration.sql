-- Update only the two family statistics requested by the client.
UPDATE "Stat"
SET "value" = 'Lakhs of', "label" = 'Happy Families'
WHERE "slug" IN ('whyUsFamilies', 'awardsFamilies');
