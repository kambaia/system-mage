export declare type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
	DateTime: any;
	/**
	 * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
	 * as they may not be parsed correctly on the server side. Use `String` literals if you are
	 * dealing with really large numbers to be on the safe side.
	 */
	Mixed: any;
	Upload: any;
	/** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
	Date: any;
	/** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
	DateTimeTz: any;
};

export declare type UserAddress = {
	street:  Scalars["String"];
	city:  Scalars["String"];
	postCode:  Scalars["String"];
	province: Scalars["String"];
    country:  Scalars["String"];
	county:  Scalars["String"];
	neighborhood: Scalars["String"];
};

export enum Gender {
	masculino = 'Masculino',
	femenino = 'Femenino',
	undisclosed = 'undisclosed'
}


export declare type IUser = {
	_id: Scalars["ID"];
	userName: Scalars["String"];
	email: Scalars["String"];
	fullName: Scalars["String"];
	phoneNumber?: Scalars["String"];
    permission?: Roles;
	createdAt: Scalars["DateTime"];
	updatedAt: Scalars["DateTime"];
	profile?: Scalars["String"];
};

export declare type LoginUser = {
	id: Scalars["ID"];
	schoolId: Scalars["String"];
	fullName: Scalars["String"];
	userName: Scalars["String"];
	email: Scalars["String"];
	phoneNumber: Scalars["String"];
	profile?: Scalars["String"];
	permissions?: Roles;
	school: SchoolAccess
};

export declare type Contact = {
	unitel:Scalars["String"];
	movicel:Scalars["String"];
	fixe:Scalars["String"];
}
export declare type IEmployee = {
	_id:String;
	firstName: Scalars["String"];
	lastName: Scalars["String"];
	description: Scalars["String"];
	gender?: Gender;
	birthDate: Scalars["String"];
	employeeBiFile:Scalars["String"];
	employeeIdentity:Scalars["String"];
	address?: UserAddress;
	contact?:Contact
	active:boolean;
}




export declare type Roles = {
		role: Scalars["String"];
		type:  Scalars["String"];
}

export declare type SchoolAccess = {
	_id: Scalars["String"];
    schoolCode:  Scalars["String"];
    schoolLogo: Scalars["String"];
    schoolName: Scalars["String"]
}


export declare type Profile = {
	thumbnail?: Maybe<Scalars["String"]>;
	name: Scalars["String"];
};
export declare type Social = {
	type?: Maybe<Scalars["String"]>;
	link?: Maybe<Scalars["String"]>;
};
/** A paginated list of Order items. */

/** Pagination information about the corresponding list of items. */
export declare type PaginatorInfo = {
	/** Total count of available items in the page. */
	count: Scalars["Int"];
	/** Current pagination page. */
	currentPage: Scalars["Int"];
	/** If collection has more pages. */
	hasMorePages: Scalars["Boolean"];
	/** Last page number of the collection. */
	lastPage: Scalars["Int"];
	/** Number of items per page in the collection. */
	perPage: Scalars["Int"];
	/** Total items available in the collection. */
	total: Scalars["Int"];
};



/** The available directions for ordering a list of records. */
export enum SortOrder {
	/** Sort records in ascending order. */
	Asc = "ASC",
	/** Sort records in descending order. */
	Desc = "DESC",
}

export declare type Attachment = {
	thumbnail?: Maybe<Scalars["String"]>;
	original?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["ID"]>;
};

export declare type VariationProductPivot = {
	price?: Maybe<Scalars["Float"]>;
};
export declare type OrderProductPivot = {
	order_quantity?: Maybe<Scalars["Int"]>;
	unit_price?: Maybe<Scalars["Float"]>;
	subtotal?: Maybe<Scalars["Float"]>;
};
export enum ProductStatus {
	Publish = "publish",
	Draft = "draft",
}
/** A paginated list of User items. */
export declare type UserPaginator = {
	/** Pagination information about the list of items. */
	paginatorInfo: PaginatorInfo;
	/** A list of User items. */
	data: Array<IUser>;
};
export declare type AddressInput = {
	title: Scalars["String"];
	default?: Maybe<Scalars["Boolean"]>;
	address: UserAddressInput;
	type: Scalars["String"];
	customer?: Maybe<ConnectBelongsTo>;
};
export declare type UserAddressInput = {
	country?: Maybe<Scalars["String"]>;
	city?: Maybe<Scalars["String"]>;
	state?: Maybe<Scalars["String"]>;
	zip?: Maybe<Scalars["String"]>;
};
export declare type ConnectBelongsTo = {
	connect?: Maybe<Scalars["ID"]>;
};
export declare type AttributeInput = {
	name: Scalars["String"];
};
export declare type AttributeValueCreateInput = {
	value: Scalars["String"];
	meta: Scalars["String"];
	attribute_id?: Scalars["ID"];
};
export declare type AttributeBelongTo = {
	connect: Scalars["ID"];
};
export declare type AttributeValueUpdateInput = {
	value?: Maybe<Scalars["String"]>;
	meta?: Maybe<Scalars["String"]>;
	attribute_id?: Scalars["ID"];
};
export declare type CreateCategory = {
	name: Scalars["String"];
	type_id?: Maybe<Scalars["ID"]>;
	parent?: Maybe<Scalars["Int"]>;
	details?: Maybe<Scalars["String"]>;
	image?: Maybe<AttachmentInput>;
	icon?: Maybe<Scalars["String"]>;
};
export declare type ConnectTypeBelongsTo = {
	connect?: Maybe<Scalars["ID"]>;
};
export declare type AttachmentInput = {
	thumbnail?: Maybe<Scalars["String"]>;
	original?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["ID"]>;
};
export declare type UpdateCategory = {
	name?: Maybe<Scalars["String"]>;
	type_id?: Maybe<Scalars["ID"]>;
	parent?: Maybe<Scalars["Int"]>;
	details?: Maybe<Scalars["String"]>;
	image?: Maybe<AttachmentInput>;
	icon?: Maybe<Scalars["String"]>;
};
export declare type CheckoutVerificationInput = {
	amount: Scalars["Float"];
	products: Array<ConnectProductOrderPivot>;
	billing_address?: Maybe<UserAddressInput>;
	shipping_address?: Maybe<UserAddressInput>;
};
export declare type ConnectProductOrderPivot = {
	product_id: Scalars["ID"];
	order_quantity?: Maybe<Scalars["Int"]>;
	unit_price?: Maybe<Scalars["Float"]>;
	subtotal?: Maybe<Scalars["Float"]>;
};
export declare type VerifiedCheckoutData = {
	total_tax: Scalars["Float"];
	shipping_charge: Scalars["Float"];
	unavailable_products: Array<Scalars["ID"]>;
};

export type Shipping = {
	id?: Maybe<Scalars["ID"]>;
	name?: Maybe<Scalars["String"]>;
	via?: Maybe<Scalars["String"]>;
	min_km?: Maybe<Scalars["String"]>;
	max_km?: Maybe<Scalars["String"]>;
	amount?: Maybe<Scalars["Float"]>;
	is_global?: Maybe<Scalars["Boolean"]>;
	type?: ShippingType;
};

export enum ShippingType {
	/** Fixed */
	Fixed = "fixed",
	/** Percentage */
	Percentage = "percentage",
	/** Free */
	Free = "free_shipping",
}



export type Tax = {
	id?: Maybe<Scalars["ID"]>;
	name?: Maybe<Scalars["String"]>;
	rate?: Maybe<Scalars["Float"]>;
	is_global?: Maybe<Scalars["Boolean"]>;
	country?: Maybe<Scalars["String"]>;
	state?: Maybe<Scalars["String"]>;
	zip?: Maybe<Scalars["String"]>;
	city?: Maybe<Scalars["String"]>;
	priority?: Maybe<Scalars["Int"]>;
	on_shipping?: Maybe<Scalars["Boolean"]>;
};

export type Invoice = {
	id?: Maybe<Scalars["ID"]>;
	code?: Maybe<Scalars["String"]>;
	content?: Maybe<Scalars["String"]>;
	value?: Maybe<Scalars["Float"]>;
	fee?: Maybe<Scalars["Float"]>;
	discount?: Maybe<Scalars["Float"]>;
	total?: Maybe<Scalars["Float"]>;
	attachment?: Maybe<Scalars["String"]>;
	expire?: Maybe<Scalars["String"]>;
	date?: Maybe<Scalars["String"]>;
	type?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
	actions?: Maybe<Scalars["String"]>;
};

export declare type CouponInput = {
	code: Scalars["String"];
	type: CouponType;
	amount: Scalars["Float"];
	description?: Maybe<Scalars["String"]>;
	image?: Maybe<AttachmentInput>;
	active_from: Scalars["DateTime"];
	expire_at: Scalars["DateTime"];
};
export enum CouponType {
	/** Fixed coupon */
	FixedCoupon = "fixed",
	/** Percentage coupon */
	PercentageCoupon = "percentage",
	/** Free shipping coupon */
	FreeShippingCoupon = "free_shipping",
}
export declare type CouponUpdateInput = {
	code?: Maybe<Scalars["String"]>;
	type?: Maybe<CouponType>;
	amount?: Maybe<Scalars["Float"]>;
	description?: Maybe<Scalars["String"]>;
	image?: Maybe<AttachmentInput>;
	active_from?: Maybe<Scalars["DateTime"]>;
	expire_at?: Maybe<Scalars["DateTime"]>;
};
export declare type UpdateOrder = {
	tracking_number?: Maybe<Scalars["String"]>;
	customer_id?: Maybe<Scalars["ID"]>;
	customer_nif?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["ID"]>;
	products?: Array<ConnectProductOrderPivot>;
	amount?: Maybe<Scalars["Float"]>;
	sales_tax?: Maybe<Scalars["Float"]>;
	total?: Maybe<Scalars["Float"]>;
	paid_total?: Maybe<Scalars["Float"]>;
	payment_id?: Maybe<Scalars["String"]>;
	payment_gateway?: Maybe<Scalars["String"]>;
	coupon_id?: Maybe<Scalars["ID"]>;
	discount?: Maybe<Scalars["Float"]>;
	delivery_fee?: Maybe<Scalars["Float"]>;
	delivery_time?: Maybe<Scalars["String"]>;
	delivery_hour?: Maybe<Scalars["String"]>;
	billing_address?: Maybe<UserAddressInput>;
	shipping_address?: Maybe<UserAddressInput>;
};
export declare type CreateOrder = {
	tracking_number: Scalars["String"];
	customer_id: Maybe<Scalars["String"]>;
	customer_nif: Scalars["Int"];
	status: Scalars["Int"];
	products: Array<ConnectProductOrderPivot>;
	amount: Scalars["Float"];
	sales_tax?: Maybe<Scalars["Float"]>;
	total: Scalars["Float"];
	paid_total: Scalars["Float"];
	payment_id?: Maybe<Scalars["String"]>;
	payment_gateway: Scalars["String"];
	coupon_id?: Maybe<Scalars["Int"]>;
	discount?: Maybe<Scalars["Float"]>;
	delivery_fee?: Maybe<Scalars["Float"]>;
	delivery_time: Scalars["String"];
	delivery_hour: Scalars["String"];
	card?: Maybe<CardInput>;
	billing_address?: Maybe<UserAddressInput>;
	shipping_address?: Maybe<UserAddressInput>;
};
export declare type CardInput = {
	number: Scalars["String"];
	expiryMonth: Scalars["String"];
	expiryYear: Scalars["String"];
	cvv: Scalars["String"];
	email?: Maybe<Scalars["String"]>;
};
export declare type OrderStatusInput = {
	name: Scalars["String"];
	color: Scalars["String"];
	serial: Scalars["Int"];
};

export declare type OrderStatusUpdateInput = {
	id: Scalars["ID"];
	name: Scalars["String"];
	color: Scalars["String"];
	serial: Scalars["Int"];
};
export declare type CreateFaq = {
	title: Scalars["String"];
	description?: Maybe<Scalars["String"]>;
	status: Maybe<Scalars["String"]>;
};
export declare type UpdateFaq = {
	title: Scalars["String"];
	description?: Maybe<Scalars["String"]>;
	status: Maybe<Scalars["String"]>;
};
export declare type CreateBanner = {
	link: Scalars["String"];
	image: Maybe<Scalars["String"]>;
	status: Maybe<Scalars["String"]>;
};
export declare type UpdateBanner = {
	link: Scalars["String"];
	mode?: Scalars["String"];
	image?: Maybe<AttachmentInput>;
	status: Maybe<Scalars["String"]>;
};
export declare type CreateProduct = {
	name: Scalars["String"];
	type_id: Scalars["String"];
	price: Scalars["Float"];
	sale_price?: Maybe<Scalars["Float"]>;
	quantity: Scalars["Int"];
	unit: Scalars["String"];
	description?: Maybe<Scalars["String"]>;
	categories?: Maybe<Array<Scalars["ID"]>>;
	variations?: Maybe<Array<AttributeProductPivot>>;
	in_stock?: Maybe<Scalars["Boolean"]>;
	is_taxable?: Maybe<Scalars["Boolean"]>;
	sku?: Maybe<Scalars["String"]>;
	gallery?: Maybe<Array<Maybe<AttachmentInput>>>;
	image?: Maybe<AttachmentInput>;
	status?: Maybe<ProductStatus>;
	height?: Maybe<Scalars["String"]>;
	length?: Maybe<Scalars["String"]>;
	weight?: Maybe<Scalars["String"]>;
	width?: Maybe<Scalars["String"]>;
};
export declare type AttributeProductPivot = {
	id: Scalars["ID"];
	price?: Maybe<Scalars["Float"]>;
};
export declare type UpdateProduct = {
	name: Scalars["String"];
	type_id: Scalars["String"];
	price: Scalars["Float"];
	sale_price?: Maybe<Scalars["Float"]>;
	quantity: Scalars["Int"];
	unit: Scalars["String"];
	description?: Maybe<Scalars["String"]>;
	categories?: Maybe<Array<Scalars["ID"]>>;
	variations?: Maybe<Array<AttributeProductPivot>>;
	in_stock?: Maybe<Scalars["Boolean"]>;
	is_taxable?: Maybe<Scalars["Boolean"]>;
	sku?: Maybe<Scalars["String"]>;
	gallery?: Maybe<Array<Maybe<AttachmentInput>>>;
	image?: Maybe<AttachmentInput>;
	status?: Maybe<ProductStatus>;
	height?: Maybe<Scalars["String"]>;
	weight?: Maybe<Scalars["String"]>;
	length?: Maybe<Scalars["String"]>;
	width?: Maybe<Scalars["String"]>;
};
export declare type ProfileInput = {
	avatar?: Maybe<Scalars["String"]>;
	bio?: Maybe<Scalars["String"]>;
	socials?: Maybe<Array<Maybe<SocialInput>>>;
	contact?: Maybe<Scalars["String"]>;
	customer?: Maybe<ConnectBelongsTo>;
};

export declare type SettingsInput = {
	options?: Maybe<SettingsOptionsInput>;
};

export type SettingsOptionsInput = {
	siteTitle?: Maybe<Scalars["String"]>;
	siteSubtitle?: Maybe<Scalars["String"]>;
	currency?: Maybe<Scalars["String"]>;
	logo?: Maybe<AttachmentInput>;
	taxClass?: Maybe<Scalars["String"]>;
	shippingClass?: Maybe<Scalars["String"]>;
};

export type SettingsOptions = {
	siteTitle?: Maybe<Scalars["String"]>;
	siteSubtitle?: Maybe<Scalars["String"]>;
	currency?: Maybe<Scalars["String"]>;
	site?: Maybe<Scalars["String"]>;
	scheduleType?: Maybe<Scalars["String"]>;
	schedule?: Maybe<Scalars["String"]>;
	banner?: Maybe<Scalars["String"]>;
	logo?: Maybe<Attachment>;
	taxClass?: Maybe<Scalars["String"]>;
	shippingClass?: Maybe<Scalars["String"]>;
	order: {type: {}}
	api: {
		pos: string;
	}
	weekly: {[key: number]: Array<number>}
};
export declare type LoginInput = {
	email: Scalars["String"];
	password: Scalars["String"];
};
export declare type RegisterInput = {
	email: Scalars["String"];
	password: Scalars["String"];
	permission: Scalars["String"];
	userName: Scalars["String"];
	profile?:Scalars["String"];
	fullName: Scalars["String"];
	phoneNumber?: Scalars["String"];
	schoolId?:   Scalars["String"];
	active:	Scalars["Boolean"];
};

export type ChangePasswordInput = {
	oldPassword: Scalars["String"];
	newPassword: Scalars["String"];
};

export type PasswordChangeResponse = {
	message?: Maybe<Scalars["String"]>;
	success?: Maybe<Scalars["Boolean"]>;
};

export type ForgetPasswordInput = {
	email: Scalars["String"];
};

export type VerifyForgetPasswordTokenInput = {
	token: Scalars["String"];
	email: Scalars["String"];
};

export type ResetPasswordInput = {
	token: Scalars["String"];
	email: Scalars["String"];
	password: Scalars["String"];
};
export enum Permission {
	/** Super admin */
	SuperAdmin = "SUPER_ADMIN",
	/** Store owner */
	StoreOwner = "STORE_OWNER",
	/** Store keeper */
	StoreKeeper = "STORE_KEEPER",
	/** Customer */
	Customer = "CUSTOMER",
}

export type UpdateUser = {
	name?: Maybe<Scalars["String"]>;
	profile?: Maybe<UserProfileInput>;
	address?: Maybe<Array<Maybe<UserAddressUpsertInput>>>;
};
export type CreateUser = {
	name?: Maybe<Scalars["String"]>;
	email: Scalars["String"];
	password: Scalars["String"];
	profile?: Maybe<UserProfileInput>;
	address?: Maybe<Array<Maybe<UserAddressUpsertInput>>>;
};

export type SocialInput = {
	type?: Maybe<Scalars["String"]>;
	link?: Maybe<Scalars["String"]>;
};

export type UserProfileInput = {
	id: Scalars["ID"];
	avatar?: Maybe<AttachmentInput>;
	bio?: Maybe<Scalars["String"]>;
	socials?: Maybe<Array<Maybe<SocialInput>>>;
	contact?: Maybe<Scalars["String"]>;
};

export type UserAddressUpsertInput = {
	title: Scalars["String"];
	default?: Maybe<Scalars["Boolean"]>;
	address: UserAddressInput;
	type: Scalars["String"];
};

export declare type Analytics = {
	totalRevenue?: Maybe<Scalars["Float"]>;
	todaysRevenue?: Maybe<Scalars["Float"]>;
	totalOrders?: Maybe<Scalars["Int"]>;
	newCustomers?: Maybe<Scalars["Int"]>;
	totalYearSaleByMonth?: Maybe<Array<Maybe<TotalYearSaleByMonth>>>;
};
export declare type TotalYearSaleByMonth = {
	total?: Maybe<Scalars["Float"]>;
	month?: Maybe<Scalars["String"]>;
};

export type CreateTypeInput = {
	name: Scalars["String"];
	image?: Maybe<AttachmentInput>;
	icon?: Maybe<Scalars["String"]>;
};
export type CreateFaqInput = {
	title: Scalars["String"];
	description: Scalars["String"];
	status: Scalars["String"];

};
export type CreateBannerInput = {
	link: Scalars["String"];
	mode: Scalars["String"];
	image: Maybe<AttachmentInput>;
	status: Scalars["String"];

};
export enum ProductType {
	/** Simple */
	Simple = "simple",
	/** Variable */
	Variable = "variable",
}
