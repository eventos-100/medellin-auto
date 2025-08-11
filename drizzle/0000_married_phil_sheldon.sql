CREATE TABLE `cars_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`make` text NOT NULL,
	`model` text NOT NULL,
	`type` text NOT NULL,
	`year` integer NOT NULL,
	`price` integer NOT NULL,
	`mileage` integer,
	`color` text,
	`imageUrl` text,
	`status` text DEFAULT 'available'
);
--> statement-breakpoint
CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`age` integer NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_email_unique` ON `users_table` (`email`);