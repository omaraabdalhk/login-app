// استيراد مكتبة React الأساسية لبناء واجهات المستخدم
import React from 'react';

// تعريف مكون Dashboard الذي يعرض لوحة التحكم للمستخدم
// يستقبل معاملين: user (بيانات المستخدم) و onLogout (دالة تسجيل الخروج)
const Dashboard = ({ user, onLogout }) => {
  return (
    // الحاوية الرئيسية للوحة التحكم
    <div className="container">
      {/* قسم الترحيب - يعرض رسالة ترحيب مع اسم المستخدم */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {/* عنوان الترحيب - يعرض اسم المستخدم أو "User" إذا لم يكن هناك اسم */}
        <h1 style={{ color: '#333', marginBottom: '1rem' }}>Welcome, {user?.name || 'User'}!</h1>
        {/* رسالة تأكيد تسجيل الدخول */}
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          You have successfully logged into your account.
        </p>
      </div>

      {/* قسم معلومات الحساب - يعرض بيانات المستخدم */}
      <div style={{ 
        background: '#f8f9fa', // خلفية رمادية فاتحة
        padding: '1.5rem',     // مساحة داخلية
        borderRadius: '10px',   // زوايا مدورة
        marginBottom: '2rem',   // مسافة سفلية
        textAlign: 'left'      // محاذاة النص لليسار
      }}>
        {/* عنوان قسم معلومات الحساب */}
        <h3 style={{ color: '#333', marginBottom: '1rem' }}>Account Information</h3>
        {/* عرض اسم المستخدم */}
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Name:</strong> {user?.name || 'N/A'}
        </div>
        {/* عرض البريد الإلكتروني */}
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Email:</strong> {user?.email || 'N/A'}
        </div>
        {/* عرض الاسم الأول إذا كان موجوداً - استخدام Conditional Rendering */}
        {user?.firstName && (
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>First Name:</strong> {user.firstName}
          </div>
        )}
        {/* عرض اسم العائلة إذا كان موجوداً - استخدام Conditional Rendering */}
        {user?.lastName && (
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Last Name:</strong> {user.lastName}
          </div>
        )}
      </div>

      {/* قسم "ما التالي" - يعرض اقتراحات للمستخدم */}
      <div style={{ 
        background: '#e3f2fd', // خلفية زرقاء فاتحة
        padding: '1.5rem',     // مساحة داخلية
        borderRadius: '10px',   // زوايا مدورة
        marginBottom: '2rem',   // مسافة سفلية
        textAlign: 'left'      // محاذاة النص لليسار
      }}>
        {/* عنوان القسم */}
        <h3 style={{ color: '#1976d2', marginBottom: '1rem' }}>What's Next?</h3>
        {/* قائمة بالاقتراحات - استخدام قائمة مرقمة */}
        <ul style={{ color: '#1976d2', paddingLeft: '1.5rem' }}>
          <li>Complete your profile</li>        {/* إكمال الملف الشخصي */}
          <li>Explore the application features</li>  {/* استكشاف ميزات التطبيق */}
          <li>Update your preferences</li>     {/* تحديث التفضيلات */}
          <li>Connect with other users</li>    {/* التواصل مع مستخدمين آخرين */}
        </ul>
      </div>

      {/* زر تسجيل الخروج - عند النقر عليه ينفذ دالة onLogout */}
      <button 
        onClick={onLogout}  // دالة تنفذ عند النقر على الزر
        className="btn"     // فئة CSS للزر
        style={{ 
          background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)', // خلفية متدرجة حمراء
          marginBottom: '1rem'  // مسافة سفلية
        }}
      >
        Sign Out  {/* نص الزر */}
      </button>

      {/* ملاحظة توضيحية في الأسفل */}
      <div style={{ 
        fontSize: '0.875rem',    // حجم الخط
        color: '#666',           // لون النص
        textAlign: 'center',     // محاذاة النص للمنتصف
        fontStyle: 'italic'      // نمط الخط مائل
      }}>
        This is a demo application. In a real app, you would see your actual data and features here.
      </div>
    </div>
  );
};

// تصدير المكون لاستخدامه في ملفات أخرى
export default Dashboard;

