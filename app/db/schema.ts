import { relations } from "drizzle-orm";

import {
  pgEnum,
  pgTable,
  uniqueIndex,
  text,
  serial,
  timestamp,
  integer,  
  boolean,  
  real,
  index,
  date,
} from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["guest", "user", "admin"]);

export const userTable = pgTable(  "user",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password"),    
    createdAt: timestamp("createdAt").defaultNow(),
    role: rolesEnum().default("guest"),
  },
  (table) => {
    return {
      nameUserIdx: index("nameUser_idx").on(table.name),
      emailIdx: uniqueIndex("email_idx").on(table.email),
    };
  });
  
export const usersRelations = relations(userTable, ({ many }) => ({
  rezerve: many(rezerveTable),
  forum: many(forumTable),
}));

export const categoryTable = pgTable("category", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
},
(table) => {
  return {
    nameCategIdx: index("nameCateg_idx").on(table.name),    
  };
});



export const categoryRelations = relations(categoryTable, ({ many }) => ({
	product: many(productTable),
}));

export const eventTable= pgTable("event", {
  id:serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),     
  dateEv:date('dateEv').notNull(),
  dateAt:date('dateAt').notNull() //publishing date
},
(table) => {
  return {
    dateEvIndex: index("dataEv_idx").on(table.dateEv),
  };
}
); 
export const eventRelations = relations(eventTable, ({ many }) => ({
	rezerveTable: many(rezerveTable),
  favoriteTableEvents:many(favoriteTableEvents)
}));

export const productTable = pgTable("product", {
  id:serial("id").primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  image:text('image').notNull() , 
  price: real('price').notNull(),
  instock: boolean().default(true),  
  categoryId:integer("categoryId").references(()=>categoryTable.id).notNull()  
},
(table) => {
  return {
    nameProdIdx: index("nameProd_idx").on(table.name),
    priceIdx: index("price_idx").on(table.price), 
    categoryIdx: index("category_idx").on(table.categoryId),     
  };
}
); 

export const productRelations = relations(
  productTable, ({ one,many }) => ({
	category: one(categoryTable, {
		fields: [productTable.categoryId],
		references: [categoryTable.id],
  }),
  favoriteTableProducts:many(favoriteTableProducts)
     
}))


export const favoriteTableEvents = pgTable("favorite_events", {
  id: serial('id').primaryKey(),
  eventId: integer('eventId').notNull().references(()=>eventTable.id,{onDelete:"cascade"}),
  userId:integer('userId').references(()=>userTable.id,{onDelete:"cascade"}),
  likes:integer('likes').notNull(),
  dateFav:timestamp('dateFav').defaultNow()
},
(table) => {
  return {
    eventIdx: index("event_idx").on(table.eventId),
  }}
);
export const favorite_eventsRelations = relations(favoriteTableEvents, ({ one }) => ({
  userTable: one(userTable, {
    fields: [favoriteTableEvents.userId],
    references: [userTable.id],
  }),
   productTable:one(eventTable,{
    fields: [favoriteTableEvents.eventId],
    references: [eventTable.id],

    })
  }))

export const favoriteTableProducts = pgTable("favorite_products", {
  id: serial('id').primaryKey(),
  productId: integer('productId').notNull().references(()=>productTable.id,{onDelete:"cascade"}),
  userId:integer('userId').references(()=>userTable.id,{onDelete:"cascade"}),
  likes:integer('likes').notNull(),
  dateFav:timestamp('dateFav').defaultNow()

},
(table) => {
  return {
    productIdx: index("product_idx").on(table.productId),
  }});

export const favorite_productsRelations = relations(favoriteTableProducts, ({ one }) => ({
  userTable: one(userTable, {
    fields: [favoriteTableProducts.userId],
    references: [userTable.id],
  }),
   productTable:one(productTable,{
    fields: [favoriteTableProducts.productId],
    references: [productTable.id],

    })
  }))

export const rezerveTable = pgTable("rezerve", {
  id:serial('id').primaryKey(),
  userId: integer('userId').references(()=>userTable.id,{onDelete:"cascade"}),
  eventId: integer('eventId').references(()=>eventTable.id,{onDelete:"cascade"}),  
  dateRez:timestamp('dateRez').defaultNow()
},
(table) => {
  return {
    userIdx: index("user_idx").on(table.userId),
    eventRezIdx: index("eventRez_idx").on(table.eventId),
  }}
); 

export const rezerveTableRelations = relations(rezerveTable, ({ one }) => ({
  userTable: one(userTable, {
    fields: [rezerveTable.userId],
    references: [userTable.id],
  }),
   eventTable:one(eventTable,{
    fields: [rezerveTable.eventId],
    references: [eventTable.id],

    })
  }))

export const forumTable = pgTable("forum", {
  id:serial("id").primaryKey(),    
  userId:integer('userId').references(()=>userTable.id,{onDelete:"cascade"}),
  message:text('message').notNull(),
  dateEv:timestamp('dateEv').defaultNow()
},
(table) => {
  return {
    userForumIdx: index("useForumr_idx").on(table.userId),    
  }}
);

export const forumRelations = relations(forumTable, ({ one}) => ({
  user: one(userTable, {
    fields: [forumTable.userId],
    references: [userTable.id],
  })
}))



export const schema = {
  user: userTable,
  category: categoryTable,
  event:eventTable,
  product:productTable,
  favoriteEvents:favoriteTableEvents,
  favoriteProducts:favoriteTableProducts,
  forum:forumTable,
  rezerve:rezerveTable,
  
};
