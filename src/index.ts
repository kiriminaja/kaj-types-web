export interface IDetail {
  config: {
    color: string;
    scheme: string;
    responsive?: boolean;
    submit: {
      rounded: string;
      label: string;
      with_icon?: boolean;
      icon: string;
    };
    benefit?: boolean;
    benefits?: string[];
    guarantee?: boolean;
    guarantees?: {
      icon: string;
      label: string;
    }[];
    show_image?: boolean;
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
      type: "image" | "video";
      src: string;
    }[];
    sku?: string;
    price: number;
    package_type_id?: number;
    package_type?: {
      id: number;
      name: string;
      insurance: boolean;
    };
    payment_methods: {
      label: string;
      value: string;
      logo?: string;
    }[];
    publish_price: number;
    force_insurance?: boolean;
    mini_cart?: boolean;
    dimensions?: {
      width: number;
      height: number;
      length: number;
      weight: number;
    };
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
        value_ids: string[];
        price: number;
        publish_price: number;
        sku?: string;
      }[];
    };
    created_at?: string;
    updated_at?: string;
  };
}
