def clean(line)
	line.gsub!("alpha","ALPHA");
	lside, rside = line.split("=")
	rside = rside.gsub(/[\d\.-]+D0/) {|m| " #{m.gsub("D0",'')} " }
	rside = rside.gsub(/ALPHA\*\*\d+/) { |m| 
		num = m.scan(/(\d+)/)
		" Math.pow( ALPHA, #{num[0][0]} ) "
	}
	rside.gsub!(")/(",") / (")
	rside.gsub!("*ALPHA","* ALPHA")
	rside.gsub!("  "," ")
	rside.gsub!("ALPHA","alpha");
	indices = lside.scan(/\L\((\d+),(\d+),(\d+)\)/)
	indices = indices[0]
	lside = "L[ #{indices[0]} ][ #{indices[1]} ][ #{indices[2]} ]"
	return "\t#{lside} = #{rside.strip};"

end

puts "var L = [];"
24.times do |i|
	puts "L[ #{i + 1 } ] = [];"
	4.times do |j|
		puts "L[ #{i + 1 } ][ #{j+1} ] = [];"
	end
end
puts "function populateMatrices( alpha ) {"
File.open('parabolic_alpha.txt','r').each_line do |line|
	puts clean(line)
end
puts "}"
