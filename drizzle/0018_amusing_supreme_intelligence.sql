DROP INDEX "email_idx";--> statement-breakpoint
ALTER TABLE "favorite_events" ALTER COLUMN "userId" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "role" SET NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX "email_idx" ON "user" USING btree (lower("email"));