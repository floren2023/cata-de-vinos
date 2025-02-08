ALTER TABLE "event" ALTER COLUMN "image" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "event" ALTER COLUMN "dateEv" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "event" ALTER COLUMN "dateEv" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "event" ALTER COLUMN "dateEv" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "event" ALTER COLUMN "dateAt" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "event" ALTER COLUMN "dateAt" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "event" ALTER COLUMN "dateAt" SET NOT NULL;