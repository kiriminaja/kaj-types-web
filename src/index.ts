export interface IBank {
  id: number;
  name: string;
  account_name: string;
  account_number: string;
}

export type OnSuccessType = "default" | "url" | "random_whatsapp";
export type GuaranteeType = {
  icon?: string;
  label: string;
};
export type PaymentMethod = {
  label: string;
  value: string;
};

export interface IDetail {
  config: {
    color: string;
    scheme: string;
    responsive?: boolean;
    show_input_label?: boolean;
    submit: {
      rounded: string;
      label: string;
      with_icon?: boolean;
      icon: string;
    };
    on_success?: {
      type?: OnSuccessType;
      props?: {
        url?: string; // use for url
        wa_phones?: string[]; // use for random_whatsapp
        yt_url?: string; // use for default
      };
      bank_accounts?: IBank[]; // use for default
    };
    benefit: {
      show: boolean;
      items: string[];
    };
    guarantee: {
      show: boolean;
      items: GuaranteeType[];
    };
    show_image?: boolean;
    show_description?: boolean;
    coupon?: boolean;
    copyright?: boolean;
    custom_fields?: {
      id: string;
      type: string;
      label: string;
      options?: {
        id: string;
        label: string;
      }[]; // Used for select, combobox, and radio button
      placeholder: string;
      required: boolean;
    }[];
  };
  product: {
    id?: number;
    uuid?: string;
    slug?: string;
    name: string;
    description: string;
    medias: {
      key: string;
      src: string;
    }[];
    sku?: string;

    price: number;
    publish_price: number;
    cogs_price?: number;

    package_type_id?: number;
    package_type?: {
      id: number;
      name: string;
      insurance: boolean;
    };
    payment_methods: PaymentMethod[];
    force_insurance?: boolean;
    form_status?: string;
    mini_cart?: boolean;

    // packaging
    width: number;
    height: number;
    length: number;
    weight: number;

    member_address_id?: number;
    variant?: {
      entries: {
        id: string;
        label: string;
      }[];
      children: {
        id: string;
        entry_id: string;
        label: string;
      }[];
      prices?: {
        id: string;
        value_ids: string[];
        price: number;
        publish_price: number;
        cogs_price?: number;
        sku?: string;
      }[];
    };
    created_at?: string;
    updated_at?: string;

    yt_url?: string;
  };
}

export * from './oms'
