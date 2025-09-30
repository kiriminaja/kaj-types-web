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
  };
  product: {
    name: string;
    description: string;
    medias: {
      key: string;
      type: "image" | "video";
      src: string;
    }[];
    price: number;
    publish_price: number;
    mini_cart?: boolean;
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
  };
}
