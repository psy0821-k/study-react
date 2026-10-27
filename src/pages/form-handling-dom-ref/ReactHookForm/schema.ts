import { z } from 'zod'

// 회원가입 폼 스키마
export const signupSchema = z
  .object({
    email: z.email('올바른 이메일 형식이 아닙니다.'),
    password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.'),
    passwordConfirm: z.string().min(1, '비밀번호 확인을 입력하세요.'),
  })
  .refine((values) => values.password === values.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'], // 에러를 표시할 필드
  })

export type SignupValues = z.infer<typeof signupSchema>

// 장바구니 폼 스키마 (동적 필드 배열)
export const CATEGORIES = [
  { value: 'book', label: '도서' },
  { value: 'food', label: '식품' },
  { value: 'fashion', label: '패션' },
] as const

const cartItemSchema = z.object({
  category: z.string().min(1, '카테고리를 선택하세요.'), // 빈 값('')은 "선택하세요" 옵션
  name: z.string().min(1, '상품명을 입력하세요.'),
  price: z.number({ error: '가격을 숫자로 입력하세요.' }).min(0, '0 이상이어야 합니다.'),
  quantity: z.number({ error: '수량을 숫자로 입력하세요.' }).int('정수여야 합니다.').min(1, '1개 이상이어야 합니다.'),
})

export const cartSchema = z.object({
  cart: z.array(cartItemSchema).min(1, '상품을 1개 이상 담아주세요.'),
})

export type CartValues = z.infer<typeof cartSchema>

// 리뷰 폼 스키마 (커스텀 컨트롤 컴포넌트)
export const MAX_RATING = 5

export const reviewSchema = z.object({
  rating: z.number().min(1, '별점을 선택하세요.').max(MAX_RATING),
  comment: z.string().min(10, '리뷰는 10자 이상 작성하세요.'),
})

export type ReviewValues = z.infer<typeof reviewSchema>
