DROP INDEX "users_email_idx";--> statement-breakpoint
CREATE INDEX "nameCateg_idx" ON "category" USING btree ("name");--> statement-breakpoint
CREATE INDEX "dataEv_idx" ON "event" USING btree ("dateEv");--> statement-breakpoint
CREATE INDEX "event_idx" ON "favorite_events" USING btree ("eventId");--> statement-breakpoint
CREATE INDEX "product_idx" ON "favorite_products" USING btree ("productId");--> statement-breakpoint
CREATE INDEX "useForumr_idx" ON "forum" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "author_idx" ON "post" USING btree ("authorId");--> statement-breakpoint
CREATE INDEX "datePubl_idx" ON "post" USING btree ("datePubl");--> statement-breakpoint
CREATE INDEX "title_idx" ON "post" USING btree ("title");--> statement-breakpoint
CREATE INDEX "nameProd_idx" ON "product" USING btree ("name");--> statement-breakpoint
CREATE INDEX "price_idx" ON "product" USING btree ("price");--> statement-breakpoint
CREATE INDEX "category_idx" ON "product" USING btree ("categoryId");--> statement-breakpoint
CREATE INDEX "user_idx" ON "rezerve" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "eventRez_idx" ON "rezerve" USING btree ("eventId");--> statement-breakpoint
CREATE INDEX "nameUser_idx" ON "users" USING btree ("name");--> statement-breakpoint
CREATE UNIQUE INDEX "email_idx" ON "users" USING btree ("email");