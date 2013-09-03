puts "var L = [];"
12.times do |i|
	puts "L[ #{i + 1 } ] = [];"
	4.times do |j|
		puts "L[ #{i + 1 } ][ #{j+1} ] = [];"
	end
end
puts "function populateMatrices( alpha ) {"
File.open('matrices.fi').each_line do |line|
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
	puts "\t#{lside} = #{rside.strip};"
end
puts "}"