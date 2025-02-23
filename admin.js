// Obfuscated admin access function (Base64 encoded)
const encodedFunction = "ZnVuY3Rpb24gYWNjZXNzQWRtaW4oKSB7IGNvbnN0IHBhc3N3b3JkID0gJ2NhdG1vdXNlJzsgY29uc3QgdXNlcklucHV0ID0gcHJvbXB0KCJFbnRlciBBZG1pbiBQYXNzd29yZDoiKTsgaWYgKHVzZXJJbnB1dCA9PT0gcGFzc3dvcmQpIHsgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYWRtaW5BdXRoZW50aWNhdGVkJywgJ3RydWUnKTsgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAiYWRtaW4uaHRtbCI7IH0gZWxzZSB7IGFsZXJ0KCJJbmNvcnJlY3QgcGFzc3dvcmQuIik7IH0gfQ==";

// Decode and execute the function
const decodedFunction = atob(encodedFunction);
eval(decodedFunction);

// Attach event listener to admin link
document.getElementById('adminLink').addEventListener('click', function(e) {
    e.preventDefault();
    accessAdmin();
});
