// enum IosPermissionEnum {
//     AllowAlert = 1,
//     AllowBadge = 2,
//     AllowSound = 4,
//     AllowDisplayInCarPlay = 8,
//     AllowCriticalAlerts = 16,
//     ProvideAppNotificationSettings = 32,
//     AllowProvisional = 64,
//     AllowAnnouncements = 128,
//   }

function enablePermissionEnbale(counter, num) {
    console.log((counter & num) == num)
    return (counter & num) == num;
}

enablePermissionEnbale(128, 2);
