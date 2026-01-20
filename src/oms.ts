export type OmsAddressProvinceT = {
  id?: number | null
  name: string | null
}

export type OmsAddressCityT = {
  id?: number | null
  type: string | null
  name: string | null
  province: OmsAddressProvinceT
}

export type OmsAddressDistrictT = {
  id?: number | null
  name: string | null
  postal_code?: string | null
  city: OmsAddressCityT
  city_id?: number
}

export type OmsAddressSubdistrictT = {
  id?: number | null
  postal_code?: string | null
  name: string | null
  district_id?: number
  district: OmsAddressDistrictT
}

export type OmsAddressDetailT = {
  id?: number
  label: string
  name: string
  shipper_name: string
  address: string
  phone: string
  provinsi_id: number
  kabupaten_id: number | null
  kecamatan_id: number | null
  kelurahan_id: number | null
  kodepos?: string | null
  latitude?: number | null
  longitude?: number | null
  primary: number
  is_primary: boolean
  created_at: string | null
  updated_at: string | null
  deleted_at: string | null
  is_visible: number
  subdistrict: OmsAddressSubdistrictT
}

export type OmsProductImage = {
  id: number
  sort_order?: number
  url?: string
  file?: File
}

export type OmsProductInformationT = {
  name?: string
  slug?: string
  sku?: string
  category_id?: number
  product_type_id?: number
  description?: string
  insurance?: boolean
  images?: OmsProductImage[]
  video?: string
}

export type OmsProductWarehouseT = {
  warehouse?: OmsAddressDetailT
}

export type OmsProductDimensionT = {
  weight?: number
  length?: number
  width?: number
  height?: number
}

export type OmsProductVariantT = {
  has_variant?: boolean
  variant_types?: {
    id?: number
    existing_id?: number
    name?: string
    attributes?: {
      id?: number
      existing_id?: number
      name?: string
    }[]
  }[]
}

export type OmsProductVariantCombinationT = {
  id?: number
  existing_id?: number
  attributes?: {
    variant_type?: string
    variant_attribute?: string
  }[]
  stock: {
    total_quantity?: number
  }
  sku?: string
  cogs?: number
  sell_price?: number
  publish_price?: number
}

export type OmsProductStockT = {
  stock_type: 'static' | 'tracking'
  stock_status?: 'ready' | 'soldout'
  stock: {
    total_quantity?: number
  }
}

export type OmsProductPriceT = {
  cogs?: number
  sell_price?: number
  publish_price?: number
}

export type OmsProductResponsiblePersonT = {
  entity_type?: string
  entity_id?: number
}

export type OmsProductTypeT = {
  id?: number
  name?: string
  insurance?: boolean
  is_fragile?: boolean
}

export type OmsProductCategoryT = {
  id?: number
  name?: string
  package_type_id?: number
  product_type_id?: number
  package_type_name?: string
}

export type OmsProductCatalogSettingResourceT = {
  key?: string
  value?: string
}

export type OmsProductCatalogDetailT = OmsProductInformationT &
  OmsProductWarehouseT & {
    id?: number
    weight?: number
    responsible_person?: OmsProductResponsiblePersonT
    category?: OmsProductCategoryT
    medias?: {
      images?: OmsProductImage[]
      videos?: {
        url?: string
      }[]
    }
    dimension?: OmsProductDimensionT
    stock_type?: number // 1: static, 2: tracking
    stock_status?: number // 1: ready, 0: soldout
    stock?: {
      total_quantity?: number
    }
    pricing?: OmsProductPriceT
    variant_types?: OmsProductVariantT['variant_types']
    variants?: OmsProductVariantCombinationT[]
  }

export type OmsGuaranteeBadgeT = {
  id?: number
  label?: string
  code?: string
  url?: string
}

export type OmsInputOptionConfigurationT = {
  label?: string
  name?: string
  type?: 'text'
  value?: string
}

export type OmsBuilderTemplateInputOptionT = {
  id?: number
  resource_id?: number
  label?: string
  type?: 'text' | 'address' | 'long_text' | 'phone_number' | 'date'
  is_default?: boolean
  required?: boolean
  is_active?: boolean
  configurations?: OmsInputOptionConfigurationT[]
}

export type OmsCourierGroupServiceT = {
  label?: string
  code?: string
  cod_supported?: boolean
}

export type OmsCourierGroupT = {
  id?: number
  code?: string
  name?: string
  image_url?: string
  services?: OmsCourierGroupServiceT[]
}

export type OmsVariableT = {
  name?: string
  variable?: string
}

export type OmsBankT = {
  id?: number
  bank_id?: number
  bank_name?: string
  bank_account_name?: string
  bank_account_number?: string
  bank_image_url?: string
}

export type OmsBuilderTemplateImageT = {
  id?: number
  url?: string
  file?: File
}

export type OmsBuilderTemplateHeaderT = {
  image?: OmsBuilderTemplateImageT
  title?: {
    value?: string
    is_active?: boolean
  }
  sub_title?: {
    value?: string
    is_active?: boolean
  }
}

export type OmsBuilderTemplateTestimonialT = {
  images?: OmsBuilderTemplateImageT[]
  is_active?: boolean
}

export type OmsBuilderTemplateDisplayModeT = {
  background_color?: string
  component_color?: string
}

export type OmsBuilderTemplateGuaranteeBadgeT = {
  values?: OmsGuaranteeBadgeT[]
  is_active?: boolean
}

export type OmsBuilderTemplateProductDisplayT = {
  image?: boolean
  video?: boolean
  description?: boolean
}

export type OmsBuilderTemplateProductVariationT = {
  view_type?: 'modern' | 'radio' | 'dropdown'
  multiple_variant?: boolean
  multiple_variant_cart?: boolean
  hide_empty_variant?: boolean
}

export type OmsBuilderTemplatePaymentOptionT = {
  cod?: boolean
  non_cod?: boolean
  unique_code?: boolean
  tax?: boolean
  banks?: OmsBankT[]
}

export type OmsBuilderTemplateSuccessConfigurationT = {
  page?: {
    title_cod?: {
      is_active?: boolean
      content?: string
    }
    sub_title_cod?: {
      is_active?: boolean
      content?: string
    }
    title_non_cod?: {
      is_active?: boolean
      content?: string
    }
    sub_title_non_cod?: {
      is_active?: boolean
      content?: string
    }
  }
  redirect_web?: {
    url?: string | null
  }
  redirect_whatsapp?: {
    phone?: string
    content_cod?: string
    content_non_cod?: string
  }
}

export type OmsBuilderTemplateT = {
  id?: number
  name?: string
  header?: OmsBuilderTemplateHeaderT
  testimonial?: OmsBuilderTemplateTestimonialT
  display_mode?: OmsBuilderTemplateDisplayModeT
  guarantee_badge?: OmsBuilderTemplateGuaranteeBadgeT
  product_display?: OmsBuilderTemplateProductDisplayT
  product_variation?: OmsBuilderTemplateProductVariationT
  input_fields?: OmsBuilderTemplateInputOptionT[]
  payment_option?: OmsBuilderTemplatePaymentOptionT
  couriers?: OmsCourierGroupT[]
  voucher?: boolean
  success_configuration?: OmsBuilderTemplateSuccessConfigurationT
  created_at?: string
}

export type OmsDataT = {
  product?: OmsProductCatalogDetailT
  configuration?: OmsBuilderTemplateT
}
