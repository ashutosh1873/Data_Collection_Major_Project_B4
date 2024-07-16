function toggleMemberFields() {
    var groupMembers = document.getElementById("groupMembers").value;
    var member2 = document.getElementById("member2");

    if (groupMembers == "2") {
        member2.style.display = "block";
        document.getElementById("rollNo2").required = true;
        document.getElementById("name2").required = true;
    } else {
        member2.style.display = "none";
        document.getElementById("rollNo2").required = false;
        document.getElementById("name2").required = false;
    }
}

function isValidRollNo(rollNo) {
    const validRollNos = [
        "2101100300001", "2101100300002", "2101100300003", "2101100300004", "2101100300005", "2101100300006",
        "2101100300007", "2101100300008", "2101100300009", "2101100300010", "2101100300011", "2101100300012",
        "2101100300013", "2101100300014", "2101100300015", "2101100300016", "2101100300017", "2101100300018",
        "2101100300019", "2101100300020", "2101100300021", "2101100300022", "2101100300023", "2101100300024",
        "2101100300025", "2101100300026", "2101100300027", "2101100300028", "2101100300029", "2101100300030",
        "2101100300031", "2101100300032", "2101100300033", "2101100300034", "2101100300035", "2101100300036",
        "2101100300037", "2101100300038", "2101100300039", "2101100300040", "2101100300041", "2101100300042",
        "2101100300043", "2101100300044", "2101100300045", "2101100300046", "2101100300047", "2101100300048",
        "2101100300049", "2101100300050", "2101100300051", "2101100300052", "2101100300053", "2101100300054",
        "2101100300055", "2101100300056", "2101100300057", "2101100300058", "2101100300059", "2101100300060",
        "2101100300061", "2101100300062", "2101100300063", "2101100300064",
        "2201100309001", "2201100309002", "2201100309003", "2201100309004", "2201100309005", "2201100309006",
        "2101100000049", "2101100200005", "2101100200034"
    ];

    return validRollNos.includes(rollNo);
}

document.getElementById("projectForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var topic = document.getElementById("topic").value;
    var description = document.getElementById("description").value;
    var groupMembers = document.getElementById("groupMembers").value;
    var rollNo1 = document.getElementById("rollNo1").value;
    var name1 = document.getElementById("name1").value;
    var rollNo2 = document.getElementById("rollNo2").value;
    var name2 = document.getElementById("name2").value;

    // Validate description length
    var descriptionWords = description.trim().split(/\s+/).length;
    if (descriptionWords < 50) {
        alert("Project/Topic Description must be at least 50 words.");
        return;
    }

    // Validate roll numbers
    if (!isValidRollNo(rollNo1)) {
        alert("Invalid AKTU Roll No for Group Member 1.");
        return;
    }
    if (groupMembers == "2" && !isValidRollNo(rollNo2)) {
        alert("Invalid AKTU Roll No for Group Member 2.");
        return;
    }

    // If all validations pass, show the late submission message
    alert("You are late, Last date is over.");
});

// Function to show loading spinner
function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

// Function to hide loading spinner
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}
