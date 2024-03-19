CREATE TABLE `account` (
	`code` text NOT NULL,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `cost_center` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `cost_center_allocation` (
	`cost_center_id` integer NOT NULL,
	`expense_id` integer NOT NULL,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	FOREIGN KEY (`cost_center_id`) REFERENCES `cost_center`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`expense_id`) REFERENCES `expense`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `expense` (
	`account_id` integer NOT NULL,
	`date` text NOT NULL,
	`description` text,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	FOREIGN KEY (`account_id`) REFERENCES `account`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `fund` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`total_budget` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `fund_allocation` (
	`amount` integer DEFAULT 0 NOT NULL,
	`cost_center_allocation_id` integer NOT NULL,
	`fund_id` integer,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	FOREIGN KEY (`cost_center_allocation_id`) REFERENCES `cost_center_allocation`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`fund_id`) REFERENCES `fund`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `account_code_idx` ON `account` (`code`);--> statement-breakpoint
CREATE UNIQUE INDEX `cost_center_name_idx` ON `cost_center` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `expense_name_idx` ON `expense` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `fund_name_idx` ON `fund` (`name`);