CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text,
	"createdAt" timestamp DEFAULT now(),
	"role" "roles" DEFAULT 'guest',
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "users" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "users" CASCADE;--> statement-breakpoint
ALTER TABLE "favorite_events" DROP CONSTRAINT "favorite_events_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "favorite_products" DROP CONSTRAINT "favorite_products_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "forum" DROP CONSTRAINT "forum_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "rezerve" DROP CONSTRAINT "rezerve_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "event" ADD COLUMN "hora" text NOT NULL;--> statement-breakpoint
ALTER TABLE "event" ADD COLUMN "min" text;--> statement-breakpoint
CREATE INDEX "nameUser_idx" ON "user" USING btree ("name");--> statement-breakpoint
CREATE UNIQUE INDEX "email_idx" ON "user" USING btree ("email");--> statement-breakpoint
ALTER TABLE "favorite_events" ADD CONSTRAINT "favorite_events_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorite_products" ADD CONSTRAINT "favorite_products_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "forum" ADD CONSTRAINT "forum_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rezerve" ADD CONSTRAINT "rezerve_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;