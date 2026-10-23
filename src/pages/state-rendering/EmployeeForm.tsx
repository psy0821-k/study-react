import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const DEPARTMENTS = ['개발', '디자인', '영업', '인사'] as const;

// 직원 등록 폼 검증 스키마
const employeeSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상 입력해주세요.'),
  email: z.email('올바른 이메일 형식이 아닙니다.'),
  phone: z.string().regex(/^01[0-9]-\d{3,4}-\d{4}$/, '010-0000-0000 형식으로 입력해주세요.'),
  department: z.enum(DEPARTMENTS, '부서를 선택해주세요.'),
  position: z.string().min(1, '직급을 입력해주세요.'),
  salary: z.coerce
    .number<string>('숫자를 입력해주세요.')
    .int('정수만 입력할 수 있습니다.')
    .positive('0보다 커야 합니다.'),
  hireDate: z.string().min(1, '입사일을 선택해주세요.'),
  isActive: z.boolean(),
});

// 폼 입력값 타입 (salary가 문자열인 입력 단계)
type EmployeeFormInput = z.input<typeof employeeSchema>;
// 검증 후 타입 (salary가 숫자로 변환된 출력 단계)
type EmployeeFormOutput = z.output<typeof employeeSchema>;

const inputClass = 'w-full rounded border border-gray-300 px-3 py-2';
const errorClass = 'mt-1 text-sm text-red-500';

export default function EmployeeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmployeeFormInput, unknown, EmployeeFormOutput>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      position: '',
      hireDate: '',
      isActive: true,
    },
  });

  // 검증을 통과한 데이터만 호출됨
  const onSubmit = async (data: EmployeeFormOutput) => {
    console.log('직원 등록 요청', data);
    // await api.post('/employees', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-4 p-6">
      <h2 className="text-xl font-bold">직원 등록</h2>

      <div>
        <label htmlFor="name">이름</label>
        <input id="name" className={inputClass} {...register('name')} />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" className={inputClass} {...register('email')} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone">연락처</label>
        <input id="phone" placeholder="010-0000-0000" className={inputClass} {...register('phone')} />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="department">부서</label>
        <select id="department" className={inputClass} defaultValue="" {...register('department')}>
          <option value="" disabled>
            선택
          </option>
          {DEPARTMENTS.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
        {errors.department && <p className={errorClass}>{errors.department.message}</p>}
      </div>

      <div>
        <label htmlFor="position">직급</label>
        <input id="position" className={inputClass} {...register('position')} />
        {errors.position && <p className={errorClass}>{errors.position.message}</p>}
      </div>

      <div>
        <label htmlFor="salary">연봉(만원)</label>
        <input id="salary" type="number" className={inputClass} {...register('salary')} />
        {errors.salary && <p className={errorClass}>{errors.salary.message}</p>}
      </div>

      <div>
        <label htmlFor="hireDate">입사일</label>
        <input id="hireDate" type="date" className={inputClass} {...register('hireDate')} />
        {errors.hireDate && <p className={errorClass}>{errors.hireDate.message}</p>}
      </div>

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register('isActive')} />
        재직 중
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded bg-blue-600 py-2 text-white disabled:opacity-50"
      >
        {isSubmitting ? '등록 중...' : '등록'}
      </button>
    </form>
  );
}
