CREATE TABLE "session" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"expiresAt" date NOT NULL
);
--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;